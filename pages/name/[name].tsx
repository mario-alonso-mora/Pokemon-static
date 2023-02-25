import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';
import { LayOut } from "@/components/layouts/LayOut"
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import pokeApi from "@/api/pokeApi";
import { Pokemon } from '../../interfaces/pokemon-full';
import { localFavorites } from '@/utils';
import confetti from 'canvas-confetti';
import { useState } from 'react';
import { PokemonListResponse } from '../../interfaces/pokemon-list';



interface Props {
  pokemon: Pokemon;

}


const PokemonByNamePage : NextPage<Props> = ({ pokemon }) => {

  const [isInFavorite, setIsInFavorite] = useState(localFavorites.existsInFavorites(pokemon.id))

  const onToogleFavorite = () => {

    localFavorites.toogleFavorites(pokemon.id);
    setIsInFavorite(!isInFavorite);

    if (isInFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 300,
      spread: 360,
      angle: -100,
      origin: {
        x: 1,
        y: 0,

      }
    })




  }



  return (

    <LayOut title={pokemon.name}>

      <Grid.Container css={{ marginTop: '5px' }} gap={2}>

        <Grid xs={12} sm={4}>

          <Card hoverable css={{ padding: '30px' }}  >
            <Card.Body>
              <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no image.png'}
                alt={pokemon.name} width='100%' height={200}
              />

            </Card.Body>
          </Card>

        </Grid>

        <Grid xs={12} sm={8}>
          <Card>

            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>

              <Text h1 transform='capitalize'>{pokemon.name}</Text>






              <Button color='gradient' ghost={!isInFavorite} onClick={onToogleFavorite}>
                {
                  (isInFavorite ? 'En Favoritos' : 'Guardar en favoritos')
                }
              </Button>

            </Card.Header>

            <Card.Body>

              <Text size={30}>Sprites:</Text>

              <Container direction='row' display='flex'>

                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />

                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />

                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />

                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />

              </Container>


            </Card.Body>


          </Card>

        </Grid>


      </Grid.Container>


    </LayOut>



  )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //const { data } = await  // your fetch function here 

  const {data} = await  pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemonsName: string[] = data.results.map(pokemon => pokemon.name)

  


  return {

    paths: pokemonsName.map((name) => ({

      params: { name }

    })),


    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { name } = params as { name: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);



  return {
    props: {

      pokemon: data

    }

  }





}

export default PokemonByNamePage ;
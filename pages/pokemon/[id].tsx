
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';
import { LayOut } from "@/components/layouts/LayOut"
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import pokeApi from "@/api/pokeApi";
import { Pokemon } from '../../interfaces/pokemon-full';
import { localFavorites } from '@/utils';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { getPokemonInfo } from '../../utils/getPokemonInfo';





interface Props {
  pokemon: Pokemon;

}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

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


// Deberíamos utilizar getStaticPaths si está pre-renderizando estáticamente páginas que utilizan rutas dinámicas


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //const { data } = await  // your fetch function here 

  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`)

  return {

    paths: pokemon151.map((id) => ({

      params: { id }

    })),

    fallback: 'blocking'//incremental static regeneration
    //fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id);

  if (!pokemon) {

    return {

      redirect: {

        destination: '/',
        permanent: false
      }
    }

  }



  return {
    props: {

      pokemon,

    },
    revalidate: 86400,//revalidacion para 24 horas

  }





}

export default PokemonPage;
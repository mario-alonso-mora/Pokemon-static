import { Card, Grid } from "@nextui-org/react"
import { FC } from 'react';
import { useRouter } from 'next/router';

interface Props {

    pokemonID:number

}

export const FavoriteCardPokemon:FC<Props> = ({pokemonID}) => {

    const router = useRouter();

    const onFavoritePokemonView = () =>{

        router.push(`/pokemon/${pokemonID}`)

    }

  return (

    <Grid onClick={onFavoritePokemonView} xs={6} sm={3} md={2} xl={1} key={pokemonID}>

                <Card hoverable clickable css={{padding:10}}>

                <Card.Image
                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
                 width={'100%'}
                 height={140}

                
                />
                  
                </Card>

              </Grid>
    
  )
}

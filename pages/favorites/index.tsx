import { NoFavorites } from '@/components/ui/NoFavorites';
import { LayOut } from '../../components/layouts/LayOut';
import { useState, useEffect } from 'react';
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';
import { FavoritesPokemons } from '@/components/pokemon/FavoritesPokemons';




const FavoritesPage = () => {


    const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([])

    useEffect(() => {
      
      setFavoritesPokemon(localFavorites.pokemons())

    }, [])
    

  return (


    <LayOut title='Pagina de Pokemons favoritos'>

      {

        favoritesPokemon.length === 0 ? (<NoFavorites/>) : (

          <FavoritesPokemons favoritesPokemons={favoritesPokemon}/>

        )
      }

    



    </LayOut>



  )
}


export default FavoritesPage
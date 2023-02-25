
import pokeApi from "@/api/pokeApi";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import { PokemonListResponse } from "@/interfaces/pokemon-list";
import { Grid } from '@nextui-org/react';
import { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { LayOut } from "../components/layouts/LayOut";
import { SmallPokemon } from '../interfaces/pokemon-list';



interface Props {

	pokemons: SmallPokemon[]

}

const HomePage: NextPage<Props> = ({ pokemons }) => {


	return (


		<LayOut title={'Listado de Pokemons'}>

			<Image src='/img/pokemon-go-pokemon-raichu-wallpaper-preview.jpg' alt="foto" width={2300} height={500} />






			<Grid.Container gap={2} justify='flex-start' >
				{

					pokemons.map((pokemon) => (

						<PokemonCard key={pokemon.id} pokemon={pokemon} />

					))


				}
			</Grid.Container>

		</LayOut>


	);
};


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async (ctx) => {

	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');


	const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
		...poke,
		id: i + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
	}))

	return {
		props: {

			pokemons

		}

	}





}

export default HomePage;

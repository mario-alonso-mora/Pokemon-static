import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { NavBar } from "../ui/NavBar";



interface Props {

	title: String;
}


const origin = ( typeof window === 'undefined') ? '' : window.location.origin;

export const LayOut: FC<PropsWithChildren<Props>> = ({ children, title }) => {



	


	return (
		<>
			<Head>
				<title>{title || "PokemonApp"}</title>
				<meta name="Author" content="Mario Alonso" />
				<meta name="description" content={`Informacion sobre el pokemon${title}`} />
				<meta name="keywords" content={`${title},pokemon,pokedex`} />

				<meta property="og:title" content={`Información sobre el pokemon ${title}`} />
				<meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
				
			</Head>

			<NavBar />

			<main style={{

			}}>{children}</main>
		</>
	);
};

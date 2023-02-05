import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { NavBar } from "../ui/NavBar";


	interface Props{

		title:String;
	}

export const LayOut: FC<PropsWithChildren <Props>> = ({ children , title}) => {
	return (
		<>
			<Head>
				<title>{title || "PokemonApp"}</title>
				<meta name="Author" content="Mario Alonso" />
				<meta name="description" content={`Informacion sobre el pokemon${title}`} />
				<meta name="keywords" content={ `${title},pokemon,pokedex`} />
			</Head>

			<NavBar/>

			<main style={{
				padding:'0px',
				
			}}>{children}</main>
		</>
	);
};

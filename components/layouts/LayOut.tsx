import Head from "next/head";
import { title } from "process";
import { FC, PropsWithChildren } from "react";

    
      export const LayOut:FC <PropsWithChildren> = ({children} ) =>  {
      return (

        <>
        
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="Author" content="Mario Alonso" />
            <meta name="description" content="informacion sobre el pokemon xxxxx" />
            <meta name="keywords" content="xxx,pokemon,pokedex" />

        </Head>



            <main>

                {children}
            </main>


        </>
        
        
      )
    }
        
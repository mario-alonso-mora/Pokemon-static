import { Link, Spacer, Text, useTheme, Container } from '@nextui-org/react';
import Image from "next/image";

import NextLink from 'next/link';




export const NavBar = () => {


    const { theme } = useTheme();

    return (

        <Container style={{

            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 50px',
            borderRadius:'100px',
            marginTop:'20px',
            
           
          
            backgroundColor: theme?.colors.warningDark.value



        }}>

            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" alt="icono de la app"
                width={70}
                height={70}
            />

            

            <NextLink href='/' passHref>
                <Container css={{display:'flex'}} justify='center' alignItems={'center'}>
                    <Text color="white" h2>P</Text><Text color="white" h3>okemon</Text>
                    
                </Container>
            </NextLink>

            <Spacer css={{ flex: 1 , margin:'0',padding:'0'}}  />

            <NextLink href='/favorites' passHref>
                <Container css={{display:'flex'}} justify='center' alignItems={'center'} >
                    <Text color="white">Favoritos</Text>
                </Container>
            </NextLink>

            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="icono de la app"
                width={70}
                height={70}
            />


        </Container>



    )



}
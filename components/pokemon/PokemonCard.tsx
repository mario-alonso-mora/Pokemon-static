import { SmallPokemon } from '../../interfaces/pokemon-list';
import { FC } from 'react';
import { Grid, Card, Row, Text } from '@nextui-org/react';



interface Props{

    pokemon:SmallPokemon
}

export const PokemonCard:FC<Props> = ({pokemon}) => {

    const {id,name,img} = pokemon

  return (
    
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>

    <Card isHoverable isPressable>

        <Card.Body css={{p:2}}>

            <Card.Image src={img}
            width="100%"
            height={140}/>

        </Card.Body>

    <Card.Footer>


    </Card.Footer>
        <Row justify="space-evenly">
            <Text transform="capitalize">{name}</Text>
            <Text>{id}</Text>

        </Row>
    </Card>


</Grid>


  )
}

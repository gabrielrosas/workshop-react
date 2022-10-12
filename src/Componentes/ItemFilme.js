import { useState } from 'react' //Importando useState

import {
    Button,
    Item,
} from 'semantic-ui-react'

function ItemFilme({ imgUrl, titulo, ano }) {
    const [over, setOver] = useState(0) //criando estado para hover

    //função para onMouseLeave
    const onMouseLeave = () => {
        setOver(0)
    }

    //função para onMouseEnter
    const onMouseEnter = (btnVoto) => () => {
        setOver(btnVoto)
    }

    //função para retornar icone correto
    const getIcon = (btnVoto) => {
        if ((over && over >= btnVoto)) {
            return "star"
        }
        return  "star outline"
    }

    // passando as propriedades dos componentes
    return (
        <Item>
            <Item.Image
                size='tiny'
                src= {imgUrl} 
            />
            <Item.Content>
                <Item.Header>{titulo}</Item.Header>
                <Item.Meta>Ano: {ano}</Item.Meta>
                <Item.Extra>
                    <Button.Group onMouseLeave={onMouseLeave}>
                        <Button onMouseEnter={onMouseEnter(1)} icon={getIcon(1)} />
                        <Button onMouseEnter={onMouseEnter(2)} icon={getIcon(2)} />
                        <Button onMouseEnter={onMouseEnter(3)} icon={getIcon(3)} />
                        <Button onMouseEnter={onMouseEnter(4)} icon={getIcon(4)} />
                        <Button onMouseEnter={onMouseEnter(5)} icon={getIcon(5)} />
                    </Button.Group>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default ItemFilme;
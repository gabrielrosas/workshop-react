import { useState } from 'react'

import {
    Button,
    Item,
} from 'semantic-ui-react'

function ItemFilme({ imgUrl, titulo, ano, salvarVoto, id, voto }) { //recebendo novos parametros
    const [over, setOver] = useState(0)

    const onMouseLeave = () => {
        setOver(0)
    }

    const onMouseEnter = (btnVoto) => () => {
        setOver(btnVoto)
    }

    //Alterando para mostrar o resultado
    const getIcon = (btnVoto) => {
        if ((over && over >= btnVoto) || (voto && voto >= btnVoto)) {
            return "star"
        }
        return  "star outline"
    }

    // evento de click nos botões de votação
    const onClick = (btnVoto) => () => {
        salvarVoto(id, btnVoto)
    }

    // passando o onClick para os componentes
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
                        <Button onClick={onClick(1)} onMouseEnter={onMouseEnter(1)} icon={getIcon(1)} />
                        <Button onClick={onClick(2)} onMouseEnter={onMouseEnter(2)} icon={getIcon(2)} />
                        <Button onClick={onClick(3)} onMouseEnter={onMouseEnter(3)} icon={getIcon(3)} />
                        <Button onClick={onClick(4)} onMouseEnter={onMouseEnter(4)} icon={getIcon(4)} />
                        <Button onClick={onClick(5)} onMouseEnter={onMouseEnter(5)} icon={getIcon(5)} />
                    </Button.Group>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default ItemFilme;
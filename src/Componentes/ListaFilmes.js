import {
    Item,
    Segment,
} from 'semantic-ui-react'

import ItemFilme from './ItemFilme'

function ListaFilmes() {
    return (
        <Segment>
            <Item.Group divided>
                <ItemFilme/>
                <ItemFilme/>
                <ItemFilme/>
                <ItemFilme/>
            </Item.Group>
        </Segment>
    )
}

export default ListaFilmes
import {
    Item,
    Segment,
} from 'semantic-ui-react'

import ItemFilme from './ItemFilme'

function ListaFilmes({ records }) {
    return (
        <Segment>
            <Item.Group divided>
                {records.map((record) => (
                    <ItemFilme
                        key={record.id}
                        imgUrl={record.imgUrl}
                        titulo={record.titulo}
                        ano={record.ano}
                        id={record.id}
                    />
                ))}
            </Item.Group>
        </Segment>
    )
}

export default ListaFilmes
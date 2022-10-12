import {
    Item,
    Segment,
    Placeholder,
    Icon,
    Header
} from 'semantic-ui-react'

import ItemFilme from './ItemFilme'

function renderLoading() {
    return [... new Array(5)].map((value, index) => (
        <Placeholder key={`p_${index}`}>
            <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
            </Placeholder.Header>
        </Placeholder>
    ))
}

function ListaFilmes({ loading, records, salvarVoto, votos }) { //Recebendo novas propriedades

    if (loading) {
        return (
            <Segment loading>
                {renderLoading()}
            </Segment>
        )
    }

    if(records.length > 0) {
        //passando novos para o item
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
                            salvarVoto={salvarVoto}
                            voto={votos[record.id]}
                        />
                    ))}
                </Item.Group>
            </Segment>
        )
    }

    return (
        <Segment placeholder>
          <Header icon>
            <Icon name='video' />
            Nenhum registro encontrado
          </Header>
        </Segment>
    )
}

export default ListaFilmes
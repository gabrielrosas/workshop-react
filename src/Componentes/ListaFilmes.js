// importando novos componentes
import {
    Item,
    Segment,
    Placeholder,
    Icon,
    Header
} from 'semantic-ui-react'

import ItemFilme from './ItemFilme'

//Criando função para rodar loading
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

function ListaFilmes({ loading, records }) { //Recebendo novas propriedades

    //Rederizando loading
    if (loading) {
        return (
            <Segment loading>
                {renderLoading()}
            </Segment>
        )
    }

    // validação de quantidade de registros
    if(records.length > 0) {
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

    // retorno de mensagem
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
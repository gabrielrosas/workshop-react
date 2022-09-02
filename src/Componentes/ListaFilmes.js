import {
    Item,
    Segment,
} from 'semantic-ui-react'

import ItemFilme from './ItemFilme'

function ListaFilmes() {
    return (
        <Segment>
            <Item.Group divided>
                <ItemFilme
                    titulo="The Avengers"
                    imgUrl="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                    ano="2012"
                />
                <ItemFilme
                    titulo="Avengers: Endgame"
                    imgUrl="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
                    ano="2019"
                />
                <ItemFilme
                    titulo="Avengers: Infinity War"
                    imgUrl="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
                    ano="2018"
                />
            </Item.Group>
        </Segment>
    )
}

export default ListaFilmes
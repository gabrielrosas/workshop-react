import {
  Container,
  Header,
  Divider
} from 'semantic-ui-react'

import './App.css';

import CampoBusca from './Componentes/CampoBusca';
import ListaFilmes from './Componentes/ListaFilmes';

const recordsMock = [{
  titulo: "The Avengers",
  imgUrl: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  ano: 2012,
  id: "tt0848228",
},{
  titulo: "Avengers: Endgame",
  imgUrl: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
  ano: 2019,
  id: "tt4154796",
},{
  titulo: "Avengers: Infinity War",
  imgUrl: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
  ano: 2018,
  id: "tt4154756",
}]

function App() {
  return (
    <Container text className="containerPage">
      <Header as='h1'>Avaliação de Filmes</Header>

      <Divider/>
      <CampoBusca/>
      <Divider/>

      <ListaFilmes records={recordsMock}/>
    </Container>
  );
}

export default App;
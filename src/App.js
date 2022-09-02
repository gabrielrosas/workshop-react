import {
  Container,
  Header,
  Divider
} from 'semantic-ui-react'

import './App.css';

import CampoBusca from './Componentes/CampoBusca';
import ListaFilmes from './Componentes/ListaFilmes';

function App() {
  return (
    <Container text className="containerPage">
      <Header as='h1'>Avaliação de Filmes</Header>

      <Divider/>
      <CampoBusca/>
      <Divider/>

      <ListaFilmes/>
    </Container>
  );
}

export default App;
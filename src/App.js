import {
  Container,
  Header,
} from 'semantic-ui-react'

import './App.css';

import PrimeiroComponente from './Componentes/PrimeiroComponente' //Adicionar

function App() {
  return (
    <Container text className="containerPage">
      <Header as='h1'>Avaliação de Filmes</Header>

      <PrimeiroComponente/> {/* Adicionar */}
    </Container>
  );
}

export default App;
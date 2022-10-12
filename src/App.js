import { useState } from 'react'

import axios from 'axios' //importando axios

import {
  Container,
  Header,
  Divider
} from 'semantic-ui-react'

import './App.css';

import CampoBusca from './Componentes/CampoBusca';
import ListaFilmes from './Componentes/ListaFilmes';

//função parse do resultado da requisição
const parseRecord = (record) => {
  return {
    titulo: record.Title,
    imgUrl: record.Poster,
    ano: record.Year,
    id: record.imdbID,
  }
}

function App() {
  const [loading, setLoading] = useState(false) 
  const [records, setRecords] = useState([])

  //fazendo requisição
  const search = (termo) => {
    if (termo) {
      setLoading(true)
      const urlTermo = encodeURIComponent(termo)
      axios.get(`https://www.omdbapi.com/?s=${urlTermo}&apikey=${process.env.REACT_APP_APIKEY}`).then((result) => {
        try {
          const newRecords = result.data.Search.map(parseRecord)
          setRecords(newRecords)
        } catch (error) {
          setRecords([])
        }
        setLoading(false)
      })
    }
  }

  return (
    <Container text className="containerPage">
      <Header as='h1'>Avaliação de Filmes</Header>

      <Divider/>
      <CampoBusca
        loading={loading} 
        search={search}
      />
      <Divider/>

      <ListaFilmes 
        loading={loading}
        records={records}
      />
    </Container>
  );
}

export default App;
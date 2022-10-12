import { useState, useEffect } from 'react' //importando useEffect

import axios from 'axios'

import {
  Container,
  Header,
  Divider
} from 'semantic-ui-react'

import './App.css';

import CampoBusca from './Componentes/CampoBusca';
import ListaFilmes from './Componentes/ListaFilmes';

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

  //criando estados dos votos
  const [votos, setVotos] = useState(() => {
    try {
      const value = JSON.parse(localStorage.getItem("votos"))
      return value || {}
    } catch (error) {
      
    }
    return {}
  })

  //função para salvar os votos
  const salvarVoto = (id, voto) => {
    setVotos({
      ...votos,
      [id]: voto
    })
  }

  //useEffect para salvar as alterações no localStage
  useEffect(() => {
    try {
        localStorage.setItem("votos", JSON.stringify(votos))
    } catch (error) {
        localStorage.setItem("votos", "{}")
    }
  }, [votos])

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

  //passando as novas propriedades
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
        salvarVoto={salvarVoto}
        votos={votos}
      />
    </Container>
  );
}

export default App;
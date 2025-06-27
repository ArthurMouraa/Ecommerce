import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import {Container} from '@mui/material'
import Cards from './components/card/card.jsx';
import Loading from './components/loading/Loading.jsx';


function App() {

  const [produto, setProduto] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {

    const dados = async () => {
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10");
        setProduto(response.data)
        setError(null);
      } catch (erro) {
        console.log("erro")
        setError("Erro ao carregar produtos. Tente novamente mais tarde.");

      } finally {
        setLoading(false);
      }

    }
    dados()

  }, [])

  return (
    <>
      <Container sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(5, 1fr)',
        },
        gap: 2,
        marginTop: "2rem"

      }
      } >

        {loading ? (
          <Loading text={"Carregando Produtos..."}  />
        ) : error? (
          <Loading text={error} />
        ) : (
          produto.map((produto) => (
            <Cards produto={produto} key={produto.id} />
          ))
        )}
      </Container >

    </>
  )
}

export default App

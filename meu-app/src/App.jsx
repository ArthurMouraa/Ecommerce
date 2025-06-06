import { useEffect, useState } from 'react';
import './styles/app.css';
import axios from 'axios';
import Produtos from './components/Produto';
import Header from './components/header';
import "./styles/header.css"


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (err) {
        setError("Não foi possível carregar os produtos. Por favor, tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    getAll();
  }, []);

  return (
    <>
      {/* <Header/> */}

      <div className="appContainer">
        <h1 className="title">E-Commerce</h1>
        {loading && <p className="loading">Carregando produtos...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && products.length > 0 && (
          <Produtos produto={products} />
        )}
        {!loading && !error && products.length === 0 && (
          <p className="loading">Nenhum produto disponível no momento.</p>
        )}
      </div>
    </>
  );
}

export default App;


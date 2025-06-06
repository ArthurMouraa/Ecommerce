import "../styles/produto.css"
import ProdutoCard from './CardProdutos';


function Produtos({ produto }) {
  if (!produto || produto.length === 0) {
    return <p style={{textAlign: 'center', color: '#555'}}>Produtos não encontrado.</p>;
  }
  return (
    <div className="todosContainer">
      {produto.map(produto => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
}

export default Produtos;
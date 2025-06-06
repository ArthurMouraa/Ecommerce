import "../styles/cardProdutos.css"


function ProdutoCard({ produto }) {
  return (
    <div className="card">
      <p className="category">{produto.category}</p>
      <img src={produto.image} alt={produto.title} className="image" />
      <h3 className="title">{produto.title}</h3>
      <p className="price">${produto.price.toFixed(2)}</p>
    </div>
  );
}

export default ProdutoCard;
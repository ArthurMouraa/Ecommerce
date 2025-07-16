import { Box, Card, Container, Typography, styled, CardMedia, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useState } from 'react'
import { ProdutoContext } from '../../context/ProductContext.jsx';
import { ContainerButn, ProductCard, ProductContainer } from './styledGrid.jsx';
import { CartContext } from '../../context/CartContext.jsx';



export default function ProductGrid() {
  const { produtos, loading, setOffSet, setLoad } = useContext(ProdutoContext);
  const { cart, addCart, removeCart, } = useContext(CartContext);


  const ProductButton = styled(Button)(({ theme }) => ({
    backgroudColor: 'red'

  }))

  const adicionarProduto = ({ id, title, price, category, image }) => {
    addCart(id, title, price, category)

  }

  return (
    <>
      <ProductContainer >
        {loading ? 'CARREGANDO...' : loading} 
        {produtos.map((item, index) => (
          <ProductCard key={item.id}>
            <CardMedia
              component="img"
              height="50%"
              image={item.images[0]}
              alt="Descrição da imagem"
            />
            <div>
              <Typography variant='subtitle1' fontWeight="bold " >{item.title}</Typography>
            </div>
            <div>
              <Typography variant='subtitle2' fontWeight="bold">R${item.price}</Typography>
              <Typography variant='body2'>{item.category.name}</Typography>
            </div>
            <ContainerButn>

              <ProductButton key={item.id} onClick={() => addCart(item)} variant="contained" endIcon={<ShoppingCartIcon />}>

                <Typography fontSize={12}>
                  Adicionar ao carrinho
                </Typography>

              </ProductButton>
            </ContainerButn>
          </ProductCard>

        ))}
      </ProductContainer>

    </>
  )

}
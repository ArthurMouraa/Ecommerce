import {
  Box, Card, Container, Typography, styled,
  CardMedia, Button, AppBar, Toolbar,
  Drawer,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useMemo } from 'react';


const Headerappbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#1F1F1F'
}))

export const Headerbutton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4B4B4B', color: 'white', padding: '1'

}))

export const DrawerBox = styled(Box)(({ theme }) => ({
  width: 300,
  [theme.breakpoints.down('sm')]: {
    width: '100px'

  }
}))


export function Header() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const { cart, addCart, removeCart, limparCart } = useContext(CartContext);
  const [valorCompra, setValorCompra] = useState(0)

  const total = useMemo(() => { return cart.reduce((contador, item) => contador + item.price, 0) }, [cart])


  console.log("cart " + cart)

  const togleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <Headerappbar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ArthurSHOPP
        </Typography>
        <Headerbutton onClick={togleDrawer}>
          <ShoppingCartIcon />
        </Headerbutton>
        <Drawer anchor='right' open={openDrawer} onClose={togleDrawer}>
          <DrawerBox>
            {cart.map((item) => {
              return (
                <Container key={item.id} sx={{ display: 'flex', gap: 2, marginBottom: '2px', marginTop: '3px' }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt="Descrição da imagem"
                    sx={{
                      height: 60,
                      width: 60,
                      objectFit: 'cover',
                      borderRadius: 1,
                    }}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                    <Typography fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography>
                      R$: {item.price}
                    </Typography>
                  </Box>

                  <IconButton onClick={() => removeCart(item.id)} aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </Container>
              )
            })}
            {cart.length > 0 ? <Typography sx={{ marginTop: 8 }}>Valor Total: R${total}</Typography> : <Typography sx={{ marginTop: '20%', marginLeft: '20%' }}>Continue comprando 🛍️</Typography>}

            {cart.length > 0 ? <Button onClick={() => limparCart()} variant="contained" sx={{ width: '100%' }}>Finalizar Compra</Button> : ''}

            {console.log(cart)}
          </DrawerBox>
        </Drawer>
      </Toolbar>
    </Headerappbar>
  );

}

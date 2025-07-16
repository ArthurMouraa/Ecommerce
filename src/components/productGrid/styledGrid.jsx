
import { Box, Card, Container, Typography, styled, CardMedia, Button } from '@mui/material';

export const ProductContainer = styled(Container)(({ theme }) => ({
  display: 'grid',
  maxWidth: 1300,
  maxHeight: 1100,
  paddingTop: 10,
  overflow: 'auto',
  gap: 10,
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  // border: 'solid 2px green',
  marginTop: 20,
  xs: '1fr',
  sm: 'repeat(2, 1fr)',
  md: 'repeat(3, 1fr)',
  lg: 'repeat(4, 1fr)',

  [theme.breakpoints.down('sm')]: {
    maxHeight: 500,
    maxWidth: 300,
    margin: 0,
    paddinf: 0
  }

}))

export const ProductCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  // height: 300,
  marginBottom: 5,
  justifyContent: 'space-between'

}))

export const ContainerButn = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2px'

}))
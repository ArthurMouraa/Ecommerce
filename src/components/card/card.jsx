import { Card, CardContent, Typography, CardMedia } from '@mui/material'

export default function Cards({ produto }) {

  return (<>
    <Card sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <CardMedia
        component="img"
        height="160"
        image={produto.images?.[0]}
        alt={produto.title}
        sx={{
          height: { xs: 140, sm: 160, md: 180}, 
          objectFit: 'cover',
          mt: '2px'
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold ">
          ${produto.price}
        </Typography>
        <Typography variant="body2">
          <b>{produto.category?.name}</b>
        </Typography>
        <Typography variant="body2">
          {produto.title}
        </Typography>
      </CardContent>
    </Card>
  </>)
}
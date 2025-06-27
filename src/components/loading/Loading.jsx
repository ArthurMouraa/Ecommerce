import {Box, Typography} from '@mui/material'

export default function Loading({text, color = "primary"}) {
  return (
    <Box
      sx={{
        gridColumn: '1 / -1', // ocupa todas as colunas do grid
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '40vh',
      }}
    >
      <Typography variant="h6" textAlign="center" mt={4} color={color}>
        {text}
      </Typography>

    </Box>
  )
}
import { Box, Grid, SxProps, Theme, Typography } from '@mui/material'
import { products } from '../../data'
import ProductCard from '../components/ProductCard'

function Home() {
  return (
    <Box>
      <Typography variant='h2'>Home</Typography>
      <Typography>Here is home page with out products</Typography>
      <Grid container rowSpacing={2}>
        {products.map(product => (
          <Grid sx={cardListSx} item xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} key={product.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const cardListSx: SxProps<Theme> = theme => ({
  background: 'red',
  display: 'flex',
  justifyContent: 'center',
})

export default Home

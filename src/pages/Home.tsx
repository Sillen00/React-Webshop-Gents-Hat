import { Box, SxProps, Theme, Typography } from '@mui/material'
import { products } from '../../data'
import ProductCard from '../components/ProductCard'

function Home() {
  return (
    <Box sx={theme => ({ padding: theme.spacing(10) })}>
      <Typography variant='h2'>Home</Typography>
      <Typography>Here is home page with out products</Typography>
      <Box sx={cardListSx}>
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Box>
    </Box>
  )
}

const cardListSx: SxProps<Theme> = theme => ({
  borderRadius: theme.spacing(2),
  background: 'red',
})

export default Home

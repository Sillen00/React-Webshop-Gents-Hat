import { Box, Grid, SxProps, Theme, Typography } from '@mui/material'
import { products } from '../../data'
import ProductCard from '../components/ProductCard'

function Home() {
  return (
    <Box>
      <Box sx={logoStyleSx}>
        <img
          style={{ width: '100%', maxWidth: '30rem' }}
          src='../images/logo-gents-hat.png'
          alt='Logotype'
        />
      </Box>
      <Typography sx={h4StyleSx} variant='h4'>
        Our Products
      </Typography>
      <Grid sx={cardListSx} container rowSpacing={3}>
        {products.map(product => (
          <Grid sx={cardListSx} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <ProductCard product={product} key={product.id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const cardListSx: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
})

const logoStyleSx: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
  margin: ' 2rem 0rem',
  '@media (min-width: 900px)': {
    margin: ' 6rem 0rem',
  },
})

const h4StyleSx: SxProps<Theme> = theme => ({
  display: 'none',
  margin: '1rem',
  '@media (min-width: 600px)': {
    display: 'flex',
  },
})

export default Home

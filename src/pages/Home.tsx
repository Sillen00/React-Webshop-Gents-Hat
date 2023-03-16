import { Box, Container, Grid, SxProps, Theme, Typography } from '@mui/material'
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
      <Container>
      <Typography sx={h3StyleSx} variant='h3' gutterBottom>
        Our Products
      </Typography>
      <Grid sx={cardListSx} container rowSpacing={5}>
        {products.map(product => (
          <Grid sx={cardListSx} item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ProductCard product={product} key={product.id} />
          </Grid>
        ))}
      </Grid>
      </Container>
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
  margin: '2rem 0rem',
  [theme.breakpoints.up('md')]: {
    margin: ' 6rem 0rem',
  },
})

const h3StyleSx: SxProps<Theme> = theme => ({
  display: 'none',
  margin: '2rem',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
})

export default Home

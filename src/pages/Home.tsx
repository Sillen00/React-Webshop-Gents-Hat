import { Box, Grid, SxProps, Theme, Typography } from '@mui/material'
import { products } from '../../data'
import ProductCard from '../components/ProductCard'
import { useProducts } from '../contexts/ProductsContext'

function Home() {
  const {databaseProducts, setDatabaseProducts} = useProducts()

  return (
    <Box sx={homeContainerSx}>
      <Box sx={logoStyleSx}>
        <img style={{ width: '100%', maxWidth: '50rem' }} src='../images/Logo.png' alt='Logotype' />
      </Box>
      <Box sx={productContainerSx}>
        <Typography sx={h3StyleSx} variant='h3' gutterBottom>
          Our Products
        </Typography>
        <Grid sx={cardListSx} container rowSpacing={5}>
          {databaseProducts.map(product => (
            <Grid key={product.id} sx={cardListSx} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

const homeContainerSx: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const productContainerSx: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '1140px',
  paddingLeft: '2rem',
  [theme.breakpoints.down('lg')]: {
    width: '880px',
    paddingLeft: '2.2rem',
  },
  [theme.breakpoints.down('md')]: {
    width: '610px',
    paddingLeft: '2.6rem',
  },
  [theme.breakpoints.down('sm')]: {
    width: '242px',
    paddingLeft: '0rem',
  },
})

const cardListSx: SxProps<Theme> = theme => ({
  display: 'flex',
})

const logoStyleSx: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '2rem 0rem',
  [theme.breakpoints.up('md')]: {
    margin: ' 0rem 0rem',
  },
})

const h3StyleSx: SxProps<Theme> = theme => ({
  display: 'none',
  
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
})

export default Home

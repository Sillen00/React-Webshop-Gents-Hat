import { Button, CardActionArea, SxProps, Theme } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Product } from '../../data'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Card sx={cardStyle} data-cy='product'>
      <CardActionArea>
        <CardMedia component='img' height='150' image={product.image} alt={product.title} />
        <CardContent>
          <Typography sx={priceTagStyle} variant='body2' data-cy='product-price'>
            $ {product.price}
          </Typography>
          <Typography gutterBottom variant='h5' component='div' data-cy='product-title'>
            {product.title}
          </Typography>

          <Typography variant='body2' data-cy='product-description'>
            {product.description}
          </Typography>
          <Button sx={cartButtonStyle} variant='contained' data-cy='product-buy-button'>
            Add to Cart
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
    // <Link style={{ textDecoration: 'none' }} to='./product-description'></Link>
  )
}

const cardStyle: SxProps<Theme> = theme => ({
  minWidth: 240,
  borderRadius: 2,
})

const cartButtonStyle: SxProps<Theme> = theme => ({
  width: '100%',
  marginTop: '1rem',
})

const priceTagStyle: SxProps<Theme> = theme => ({
  border: '1px solid black',
  padding: '0.3rem 0.4rem',
  display: 'inline',
  background: '#D1D1D1',
  position: 'absolute',
  right: '1.5rem',
  top: '8.5rem',
})

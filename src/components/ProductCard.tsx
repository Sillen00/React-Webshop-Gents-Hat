import { Button, CardActionArea, SxProps, Theme } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Product } from '../../data'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <Card sx={cardStyle}>
      <CardActionArea>
        <CardMedia component='img' height='150' image={product.image} alt={product.title} />
        <CardContent>
          <Typography variant='body2'>$ {product.price}</Typography>
          <Link style={{ textDecoration: 'none' }} to='./product-description'>
            <Typography color='primary' gutterBottom variant='h5' component='div'>
              {product.title}
            </Typography>
          </Link>
          <Typography variant='body2'>{product.description}</Typography>
          <Button variant='contained'>Add to Cart</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const cardStyle: SxProps<Theme> = theme => ({
  minWidth: 270,
  borderRadius: 2,
})

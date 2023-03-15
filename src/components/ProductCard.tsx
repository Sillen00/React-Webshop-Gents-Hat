import { Box, CardActionArea, styled, SxProps, Theme } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Product } from '../../data'
import Snackbar from '../components/Snackbar'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const handleSnackbarClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <Card sx={cardStyle} data-cy='product'>
      <Link style={{ textDecoration: 'none' }} to={`/product/${product.id}`}>
        <StyledCardActionArea>
          <Box sx={{ position: 'relative' }}>
            <Box sx={hatHoverStyle}>View Product</Box>
            <CardMedia
              sx={imageStyle}
              component='img'
              height='150'
              image={product.image}
              alt={product.title}
            />
          </Box>

          <CardContent>
            <Typography sx={priceTagStyle} variant='body2' data-cy='product-price'>
              ${product.price}
            </Typography>
            <Typography gutterBottom variant='h5' component='div' data-cy='product-title'>
              {product.title}
            </Typography>
            <Typography variant='body2' data-cy='product-description'>
              {product.description}
            </Typography>
          </CardContent>
        </StyledCardActionArea>
      </Link>
      <Box onClick={handleSnackbarClick}>
        <Snackbar />
      </Box>
    </Card>
  )
}

const imageStyle: SxProps<Theme> = theme => ({
  objectFit: 'contain',
})
const cardStyle: SxProps<Theme> = theme => ({
  minWidth: 240,
  borderRadius: 2,
  '&:hover': {
    backgroundColor: 'transparent',
  },
})

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  '& .MuiCardActionArea-focusHighlight': {
    backgroundColor: 'transparent',
  },
}))

const hatHoverStyle: SxProps<Theme> = theme => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'transparent',
  color: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: theme.typography.body2.fontFamily,

  '&:hover': {
    background: '#d9d9d977',
    color: 'black',
  },
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

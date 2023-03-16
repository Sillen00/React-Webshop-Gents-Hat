import { Box, Typography } from '@mui/material'
import { products } from '../../data'
import {
  cardImgStyle,
  cartCardRightBoxStyleSx,
  descriptionTextStyleSx,
  imageBoxStyleSx,
  mediaFontSizeStyleSx,
  productCardStyleSx,
  quantityBoxStyleSx,
  quantityStyleSx,
} from './CheckoutCard'

export default function OrderData() {
    return (


<Box data-cy='cart-item' sx={productCardStyleSx}>
  <Box sx={{ ...imageBoxStyleSx, width: '100px', mx: '10px' }}>
    <img style={cardImgStyle} src={products[0].image} alt={products[0].description} />
  </Box>
  <Box sx={cartCardRightBoxStyleSx}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant='h3' sx={mediaFontSizeStyleSx}>
        {products[0].title}
      </Typography>
      {/* deletebutton */}
    </Box>
    <Box sx={{ flexGrow: '4', display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant='body2' color='secondary.dark' sx={descriptionTextStyleSx}>
        {'$30'} &nbsp;&nbsp; {'|'} &nbsp;&nbsp; {'Black'} &nbsp;&nbsp; {'|'} &nbsp;&nbsp;
        {'M'}
      </Typography>
      <Box sx={quantityBoxStyleSx}>
        <Typography data-cy='product-quantity' variant='body2' sx={quantityStyleSx}>
          2
        </Typography>
      </Box>
    </Box>
  </Box>
</Box>
    )}
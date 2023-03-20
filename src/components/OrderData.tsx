import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
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

interface Props {
  title: string
  price: number
  quantity: number
  size: string
  image: string
  color: string
}

export default function OrderData(props: Props) {
    const theme = useTheme();
    const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (


<Box data-cy='cart-item' sx={productCardStyleSx}>
  <Box sx={{ ...imageBoxStyleSx, width: '100px', mx: '10px' }}>
    <img style={cardImgStyle} src={props.image}/>
  </Box>
  <Box sx={cartCardRightBoxStyleSx}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant='h3' sx={mediaFontSizeStyleSx}>
        {props.title}
      </Typography>
      {/* deletebutton */}
    </Box>
    <Box sx={{ flexGrow: '4', display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant='body2' color='secondary.dark' sx={descriptionTextStyleSx}>
        {'$' + props.price} &nbsp;&nbsp; {'|'} &nbsp;&nbsp; {props.color} &nbsp;&nbsp; {'|'} &nbsp;&nbsp;
        {props.size}
      </Typography>
      <Box sx={quantityBoxStyleSx}>
        <Typography data-cy='product-quantity' variant='body2' sx={quantityStyleSx}>
          {props.quantity}
        </Typography>
      </Box>
    </Box>
  </Box>
</Box>
    )}
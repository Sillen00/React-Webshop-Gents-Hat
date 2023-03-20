import { Box, SxProps, Theme, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { products } from '../../data'
import {
  cardImgStyle,
  cartCardRightBoxStyleSx,
  descriptionTextStyleSx,
  imageBoxStyleSx,
  mediaFontSizeStyleSx, quantityBoxStyleSx,
  quantityStyleSx
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
  const theme = useTheme()
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box sx={{pt: 2, pb: 2, borderBottom: "solid black 1px", display: 'flex'}}>
      <Box data-cy='cart-item' sx={displayOrderItem}>
        <Box sx={{ ...imageBoxStyleSx, width: '100px', mx: '10px' }}>
          <img style={cardImgStyle} src={props.image} />
        </Box>
        <Box sx={cartCardRightBoxStyleSx}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingRight: '1rem',
            }}
          >
            <Typography variant='h3' sx={headingStyleSx}>
              {props.title}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: '4', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='body2' color='secondary.dark' sx={descriptionTextStyleSx}>
              {'$' + props.price} &nbsp;&nbsp; {'|'} &nbsp;&nbsp; {props.color} &nbsp;&nbsp; {'|'}{' '}
              &nbsp;&nbsp;
              {props.size}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ ...quantityBoxStyleSx, alignItems: 'center', justifyContent: 'flex-end', display: 'flex' }}
        >
          <Typography data-cy='product-quantity' variant='body2' sx={quantityStyleSx}>
            {props.quantity}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const displayOrderItem: SxProps<Theme> = {
  display: 'flex',
  maxHeight: '200px',
  alignItems: 'center',
  width: '100%',
  paddingRight: '2rem',
}

const headingStyleSx: SxProps<Theme> = {
  fontSize: '1.6rem',
}


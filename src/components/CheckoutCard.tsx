import * as Icon from '@mui/icons-material'
import { Box, Button, Paper, SxProps, Theme, Typography } from '@mui/material'
import { CSSProperties } from 'react'
import { CartItem } from '../../data'
import { useCart } from '../contexts/CartContext'

interface Props {
  cartItem: CartItem
}

function CheckoutCard({ cartItem }: Props) {
  const { cartItems, addProductToCart, removeProductFromCart, totalProductsInCart } = useCart()

  return (
    <Paper elevation={3} sx={{ borderRadius: '0.8rem' }}>
      <Box data-cy='cart-item' sx={productCardStyleSx}>
        <Box sx={imageBoxStyleSx}>
          <img style={cardImgStyle} src={cartItem.image} alt={cartItem.shortDescription} />
        </Box>
        <Box sx={cartCardRightBoxStyleSx}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant='h3' sx={mediaFontSizeStyleSx}>
              {cartItem.title}
            </Typography>
            <Typography sx={mediaTopStyleSx}>
              <Icon.DeleteOutline color='error' sx={mediaFontSizeStyleSx} />
            </Typography>
          </Box>
          <Box sx={{ flexGrow: '4', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='body2' color='secondary.dark' sx={descriptionTextStyleSx}>
              ${cartItem.price} &nbsp;&nbsp; {'|'} &nbsp;&nbsp; {cartItem.color} &nbsp;&nbsp; {'|'}{' '}
              &nbsp;&nbsp;
              {cartItem.size}
            </Typography>
            <Box sx={quantityBoxStyleSx}>
              <Button
                data-cy='decrease-quantity-button'
                variant='contained'
                color='secondary'
                sx={changeQuantityBtnStyleSx}
                onClick={() => {
                  removeProductFromCart(cartItem)
                }}
              >
                <Typography variant='body2' sx={{ fontWeight: '800' }}>
                  -
                </Typography>
              </Button>
              <Typography data-cy='product-quantity' variant='body2' sx={quantityStyleSx}>
                {cartItem.quantity}
              </Typography>
              <Button
                data-cy='increase-quantity-button'
                variant='contained'
                color='secondary'
                sx={changeQuantityBtnStyleSx}
                onClick={() => {
                  addProductToCart(cartItem)
                }}
              >
                <Typography variant='body2' sx={{ fontWeight: '800' }}>
                  +
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography variant='body2' sx={productTotalStyleSx}>
              Total: ${cartItem.price * cartItem.quantity}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export const productCardStyleSx: SxProps<Theme> = theme => ({
  display: 'flex',
  maxHeight: '100px',
  [theme.breakpoints.up('md')]: { maxHeight: '150px' },
})
const mediaTopStyleSx: SxProps<Theme> = theme => ({
  position: 'relative',
  top: '0',
  [theme.breakpoints.up('md')]: { top: '50px' },
})
export const mediaFontSizeStyleSx: SxProps<Theme> = theme => ({
  fontSize: '1.4rem',
  [theme.breakpoints.up('md')]: { fontSize: '2rem' },
})
export const cartCardRightBoxStyleSx: SxProps<Theme> = theme => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  py: 1,
  pr: 2,
  pl: 1,
})
export const descriptionTextStyleSx: SxProps<Theme> = theme => ({
  fontWeight: '700',
  fontSize: '0.7rem',
  [theme.breakpoints.up('md')]: { fontSize: '1rem' },
})
export const quantityBoxStyleSx: SxProps<Theme> = theme => ({
  display: 'flex',
  gap: '5px',
  position: 'relative',
  top: '28px',
  [theme.breakpoints.up('md')]: { top: '10px', right: '245px', gap: '10px' },
})
export const quantityStyleSx: SxProps<Theme> = theme => ({
  fontWeight: '800',
  fontSize: '1.2rem',
  [theme.breakpoints.up('md')]: { fontSize: '1.4rem' },
})
const changeQuantityBtnStyleSx: SxProps<Theme> = theme => ({
  width: '1.4rem',
  height: '1.4rem',
  p: 0,
  minWidth: 0,
  position: 'relative',
  top: '2px',
  [theme.breakpoints.up('md')]: {
    width: '1.6rem',
    height: '1.6rem',
    top: '4px',
  },
})
 const productTotalStyleSx: SxProps<Theme> = theme => ({
  fontSize: '1rem',
  fontWeight: '800',
  [theme.breakpoints.up('md')]: { fontSize: '1.2rem' },
})
export const imageBoxStyleSx: SxProps<Theme> = theme => ({
  width: '100px',
  mx: '10px',
  [theme.breakpoints.up('md')]: { width: '150px' },
})

export const cardImgStyle: CSSProperties = {
  height: '100%',
  width: '100%',
  objectFit: 'contain',
  borderRadius: '0.8rem',
}

export default CheckoutCard

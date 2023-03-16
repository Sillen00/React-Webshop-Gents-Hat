import { Theme } from '@emotion/react'
import { Box, SxProps } from '@mui/material'
import Button from '@mui/material/Button'
import { useSnackbar } from 'notistack'
import * as React from 'react'
import { Product } from '../../data'
import { useCart } from '../contexts/CartContext'

interface Props {
  product: Product
}

export default function AddToCartButton(props: Props) {
  const { addProductToCart } = useCart()
  const { enqueueSnackbar } = useSnackbar()

  const handleClickVariant = () => {
    addProductToCart(props.product)
    enqueueSnackbar(`Added your product to the cart!`, {
      variant: 'success',
    })
  }

  return (
    <React.Fragment>
      <Box sx={buttonPosition}>
        <Button
          sx={cartButtonStyle}
          variant='contained'
          onClick={handleClickVariant}
          data-cy='product-buy-button'
        >
          Add to Cart
        </Button>
      </Box>
    </React.Fragment>
  )
}

const cartButtonStyle: SxProps<Theme> = theme => ({
  width: '100%',
  margin: '1rem',
})

const buttonPosition: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
})

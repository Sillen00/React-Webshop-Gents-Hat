import { Theme } from '@emotion/react'
import { Box, SxProps } from '@mui/material'
import Button from '@mui/material/Button'
import { SnackbarProvider, useSnackbar, VariantType } from 'notistack'
import * as React from 'react'
import { CartContext } from '../contexts/CartContext'

function Snackbar() {
  const { incrementItemCount } = React.useContext(CartContext)
  const { enqueueSnackbar } = useSnackbar()

  const handleClickVariant = (variant: VariantType) => () => {
    enqueueSnackbar(`Added your product to the cart!`, {
      variant: 'success',
    })
    incrementItemCount() // increment cart count
  }

  return (
    <React.Fragment>
      <Box sx={buttonPosition}>
        <Button
          sx={cartButtonStyle}
          variant='contained'
          onClick={handleClickVariant('success')}
          data-cy='product-buy-button'
        >
          Add to Cart
        </Button>
      </Box>
    </React.Fragment>
  )
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Snackbar data-cy='added-to-cart-toast' />
    </SnackbarProvider>
  )
}

const cartButtonStyle: SxProps<Theme> = theme => ({
  width: '100%',
  '&:hover': {
    background: 'green',
    color: 'white',
  },
})

const buttonPosition: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
})

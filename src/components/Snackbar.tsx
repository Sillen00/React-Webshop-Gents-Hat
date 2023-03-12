import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import Button from '@mui/material/Button'
import { SnackbarProvider, useSnackbar, VariantType } from 'notistack'
import * as React from 'react'

function Snackbar() {
  const { enqueueSnackbar } = useSnackbar()

  const handleClickVariant = (variant: VariantType) => () => {
    enqueueSnackbar(`Added your product to the cart!`, { variant: 'success' })
  }

  return (
    <React.Fragment>
      <Button
        sx={cartButtonStyle}
        variant='contained'
        onClick={handleClickVariant('success')}
        data-cy='product-buy-button'
      >
        Add to Cart
      </Button>
    </React.Fragment>
  )
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Snackbar />
    </SnackbarProvider>
  )
}

const cartButtonStyle: SxProps<Theme> = theme => ({
  width: '100%',
  marginTop: '1rem',
})

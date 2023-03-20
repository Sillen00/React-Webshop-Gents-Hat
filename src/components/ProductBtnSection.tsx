import { Button, Theme, Typography } from '@mui/material'
import { Box, SxProps } from '@mui/system'
import { NavLink } from 'react-router-dom'
import { Product } from '../../data'
import AddToCartButton from '../components/Snackbar'

interface Props {
  product: Product
}

function ProductBtnSection({ product }: Props) {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
        <Typography sx={quantityBoxStyle}>1</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <AddToCartButton product={product} />
        </Box>
      </Box>
      <NavLink to='/checkout'>
        <Box sx={{ flexGrow: 1 }}>
          <Button variant='contained' sx={checkOutBtnStyle}>
            Checkout
          </Button>
        </Box>
      </NavLink>
    </Box>
  )
}

const quantityBoxStyle: SxProps<Theme> = theme => ({
  border: '1px solid black',
  padding: '0.3rem 1rem',
  marginRight: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const checkOutBtnStyle: SxProps<Theme> = theme => ({
  background: 'black',
  color: 'white',
  width: '100%',
  '&:hover': {
    background: theme.palette.secondary.main,
    color: 'black',
  },
})

export default ProductBtnSection

import { Button, Input, Theme } from '@mui/material'
import { Box, SxProps } from '@mui/system'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Product } from '../../data'
import AddToCartButton from '../components/Snackbar'

interface Props {
  product: Product
}

function ProductBtnSection({ product }: Props) {
  const [quantity, setQuantity] = useState<number>(1)

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value)
    if (isNaN(newQuantity) || newQuantity < 1) {
      return
    }
    setQuantity(newQuantity)
  }
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
        <Input
          type='number'
          value={quantity}
          onChange={handleQuantityChange}
          sx={quantityBoxStyle}
          inputProps={{ min: 1 }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <AddToCartButton
            product={product}
            quantity={quantity}
            onAddToCart={() => setQuantity(1)}
          />
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
  width: '3.5rem',
  border: '1px solid black',
  padding: '0.3rem',
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

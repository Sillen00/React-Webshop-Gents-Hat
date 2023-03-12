import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { Box, Button, Container, Typography } from '@mui/material'
import CartCard from '../components/CartCard'

function Cart() {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
        <Typography variant='h3'>Cart</Typography>
        <Button variant='contained' sx={{ fontWeight: '800', color: 'common.black' }}>
          Checkout <KeyboardDoubleArrowDownIcon />
        </Button>
      </Box>

      <CartCard />
    </Container>
  )
}

export default Cart

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { Box, Button, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import CartCard from '../components/CartCard'
import CartTotalPrice from '../components/CartTotalPrice'

function Cart() {
  const isMediumScreen = useMediaQuery('(min-width:768px)')
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
        <Typography variant='h3'>Cart</Typography>
        <Button variant='contained' sx={{ fontWeight: '800', color: 'common.black' }}>
          Checkout <KeyboardDoubleArrowDownIcon />
        </Button>
      </Box>

      {isMediumScreen && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h3' color='secondary.dark' sx={{ fontSize: '1.4rem' }}>
            Product
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='h3' color='secondary.dark' sx={{ mr: 20, fontSize: '1.4rem' }}>
              Quantity
            </Typography>
            <Typography variant='h3' color='secondary.dark' sx={{ fontSize: '1.4rem' }}>
              Delete
            </Typography>
          </Box>
        </Box>
      )}

      <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
        <CartCard />
        <CartCard />
      </Stack>

      <CartTotalPrice />
    </Container>
  )
}

export default Cart

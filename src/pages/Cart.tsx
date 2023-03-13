import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { Box, Button, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import CartCard from '../components/CartCard'
import CartCardSubheaders from '../components/CartCardSubheaders'
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

      {isMediumScreen && <CartCardSubheaders />}

      <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
        <CartCard />
        <CartCard />
      </Stack>

      <CartTotalPrice />
    </Container>
  )
}

export default Cart

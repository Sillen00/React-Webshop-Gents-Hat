import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { Box, Button, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import CheckoutCard from '../components/CheckoutCard'
import CheckoutCardSubheaders from '../components/CheckoutCardSubheaders'
import CheckoutEmpty from '../components/CheckoutEmpty'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutTotalPrice from '../components/CheckoutTotalPrice'
import { useCart } from '../contexts/CartContext'

function Checkout() {
  const isMediumScreen = useMediaQuery('(min-width:900px)')
  const { cartItems, totalPrice } = useCart()

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
        <Typography variant='h3'>Cart</Typography>
        <Button variant='contained' sx={{ fontWeight: '800', color: 'common.black' }}>
          Checkout <KeyboardDoubleArrowDownIcon />
        </Button>
      </Box>

      {cartItems.length > 0 && isMediumScreen && <CheckoutCardSubheaders />}

      <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
        {cartItems.map(cartItem => (
          <CheckoutCard cartItem={cartItem} key={cartItem.id} />
        ))}
      </Stack>

      {cartItems.length > 0 ? <CheckoutTotalPrice totalPrice={totalPrice} /> : <CheckoutEmpty />}

      {/* Lägg till en if-sats — visa bara formuläret om kundvagnen har produkter */}

      <Container>
        <CheckoutForm />
      </Container>
    </Container>
  )
}

export default Checkout

import { KeyboardDoubleArrowLeft } from '@mui/icons-material'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import {
  Box,
  Button,
  Container,
  Stack,
  SxProps,
  Theme,
  Typography,
  useMediaQuery
} from '@mui/material'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import CheckoutCard from '../components/CheckoutCard'
import CheckoutCardSubheaders from '../components/CheckoutCardSubheaders'
import CheckoutEmpty from '../components/CheckoutEmpty'
import CheckoutForm from '../components/CheckoutForm'
import CheckoutTotalPrice from '../components/CheckoutTotalPrice'
import { useCart } from '../contexts/CartContext'
import '../index.css'

function Checkout() {
  const isMediumScreen = useMediaQuery('(min-width:900px)')
  const { cartItems, totalPrice } = useCart()

  const formRef = useRef<HTMLDivElement>(null)
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Container>
      <Box sx={{ marginBottom: '10rem' }}>
      <Typography variant='h3' gutterBottom>Cart</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, pb: 8 }}>
          
          <Link to='../' style={{marginRight: '1.9rem'}}>
            <Button
              variant='contained'
              sx={{
                fontWeight: '800',
                minHeight: '3rem',
                color: 'common.black',
                '&:hover': {
                  background: 'green',
                  color: 'white',
                },
              }}
            >
              <KeyboardDoubleArrowLeft /> Continue shopping
            </Button>
          </Link>

          {cartItems.length > 0 && (
            <Button
              variant='contained'
              sx={{
                fontWeight: '800',
                minWidth: '9rem',
                color: 'common.black',
                mx: '2',
                '&:hover': {
                  background: 'green',
                  color: 'white',
                },
              }}
              onClick={scrollToForm}
            >
              Checkout <KeyboardDoubleArrowDownIcon />
            </Button>
          )}
        </Box>

        {cartItems.length > 0 && isMediumScreen && <CheckoutCardSubheaders />}

        <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
          {cartItems.map(cartItem => (
            <CheckoutCard cartItem={cartItem} key={cartItem.id} />
          ))}
        </Stack>

        {cartItems.length > 0 ? <CheckoutTotalPrice totalPrice={totalPrice} /> : <CheckoutEmpty />}

        {cartItems.length > 0 && (
          <Box ref={formRef} sx={formMediaQueries}>
            <CheckoutForm />
          </Box>
        )}
      </Box>
    </Container>
  )
}

const formMediaQueries: SxProps<Theme> = theme => ({
  paddingTop: `calc(var(--header-height-xl) + 1rem)`,
  [theme.breakpoints.down('md')]: {
    paddingTop: `calc(var(--header-height-md) + 1rem)`,
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: `calc(var(--header-height-sm) + 1rem)`,
  },
})

export default Checkout

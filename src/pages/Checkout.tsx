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
  useMediaQuery,
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

/* ---------------------------
      PROPS AND VARIABLES
--------------------------- */

function Checkout() {
  const isMediumScreen = useMediaQuery('(min-width:900px)')
  const { cartItems, totalPrice } = useCart()

  const formRef = useRef<HTMLDivElement>(null)
  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  /* ----------------------
        CHECKOUT PAGE
  ---------------------- */

  return (
    <Container>
      <Box sx={{ marginBottom: '10rem' }}>
        <Typography variant='h3' gutterBottom>
          Cart
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 2, pb: 8 }}>
          
          {/* CONTINUE SHOPPING BUTTON */}

          <Link to='../'>
            <Button variant='contained' sx={continueButton}>
              <KeyboardDoubleArrowLeft /> Continue shopping
            </Button>
          </Link>

          {/* CHECKOUT BUTTON */}

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

        {/* LIST OF CART ITEMS */}

        {cartItems.length > 0 && isMediumScreen && <CheckoutCardSubheaders />}

        <Stack spacing={{ xs: 1, sm: 2, md: 3 }}>
          {cartItems.map(cartItem => (
            <CheckoutCard cartItem={cartItem} key={cartItem.id} />
          ))}
        </Stack>

        {cartItems.length > 0 ? <CheckoutTotalPrice totalPrice={totalPrice} /> : <CheckoutEmpty />}

        {/* FORM COMPONENT */}

        {cartItems.length > 0 && (
          <Box ref={formRef} sx={formMediaQueries}>
            <CheckoutForm />
          </Box>
        )}
      </Box>
    </Container>
  )
}

/* ----------------------
       CSS STYLING
---------------------- */

const formMediaQueries: SxProps<Theme> = theme => ({
  paddingTop: `calc(var(--header-height-xl) + 1rem)`,
  [theme.breakpoints.down('md')]: {
    paddingTop: `calc(var(--header-height-md) + 1rem)`,
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: `calc(var(--header-height-sm) + 1rem)`,
  },
})

const continueButton: SxProps<Theme> = theme => ({
  fontWeight: '800',
  minHeight: '3rem',
  color: 'common.black',
  '&:hover': {
    background: 'green',
    color: 'white',
  },
  [theme.breakpoints.down('sm')]: {
    width: '11rem',
  },
})

export default Checkout

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
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

      <Paper elevation={3} sx={{ borderRadius: '0.8rem' }}>
        <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
          <CartCard />
        </Stack>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', mt: 1 }}>
        <Paper elevation={3} sx={{ borderRadius: '0.8rem' }}>
          <Typography
            variant='body2'
            color='common.black'
            sx={{ fontWeight: '800', background: 'white', p: 1 }}
          >
            Total: $ 60
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}

export default Cart

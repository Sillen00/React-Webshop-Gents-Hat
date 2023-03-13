import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'

function CartTotalPrice() {
  return (
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
  )
}

export default CartTotalPrice

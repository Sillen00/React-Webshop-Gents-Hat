import { Paper, Typography } from '@mui/material'
import { Box, SxProps, Theme } from '@mui/system'

function CartTotalPrice() {
  return (
    <Box sx={totalPriceBoxStyleSx}>
      <Paper elevation={3} sx={{ borderRadius: '0.8rem' }}>
        <Typography variant='body2' color='common.black' sx={totalPriceTextStyleSx}>
          Total: $ 60
        </Typography>
      </Paper>
    </Box>
  )
}

const totalPriceTextStyleSx: SxProps<Theme> = theme => ({
  fontWeight: '800',
  background: 'white',
  p: 1,
  fontSize:"1.1rem", 
  borderRadius:"0.2rem",
  [theme.breakpoints.up('md')]: {px: 4, fontSize:"1.4rem"},
})
const totalPriceBoxStyleSx: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  mt: 1,
  // [theme.breakpoints.up('md')]: {},
})

export default CartTotalPrice

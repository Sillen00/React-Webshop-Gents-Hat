import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown'
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import { CSSProperties } from 'react'
import { products } from '../../data'

function Cart() {
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
        <Typography variant='h3'>Cart</Typography>
        <Button variant='contained' sx={{ fontWeight: '800', color: 'common.black' }}>
          Checkout <KeyboardDoubleArrowDownIcon />
        </Button>
      </Box>

      {/* box med tillagda produkt kort. Statisk kodat sålänge. */}
      <Box>
        <Paper elevation={3}>
          <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{width:"30%"}}>
                <img style={cardImgStyle} src={products[0].image} alt={products[0].description} />
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography>{products[0].title}</Typography>
                <DeleteOutlineIcon color='error' />
              </Box>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </Container>
  )
}

const cardImgStyle: CSSProperties = {
  width: "100%",
  height: "100%",
};

export default Cart

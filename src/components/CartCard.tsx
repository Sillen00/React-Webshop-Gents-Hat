import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import { CSSProperties } from 'react'
import { products } from '../../data'

function CartCard() {
  return (
    <Box>
      <Paper elevation={3} sx={{ borderRadius: '0.8rem' }}>
        <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '30%' }}>
              <img style={cardImgStyle} src={products[0].image} alt={products[0].description} />
            </Box>
            <Box
              sx={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                py: 1,
                pr: 2,
                pl: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant='h3' sx={{ fontSize: '1.5rem' }}>
                  {products[0].title}
                </Typography>
                <Typography>
                  <DeleteOutlineIcon color='error' />
                </Typography>
              </Box>
              <Box sx={{ flexGrow: '4' }}>
                <Typography
                  variant='body2'
                  color='secondary.dark'
                  sx={{ fontWeight: '700', fontSize: '0.8rem' }}
                >
                  {'$30'} &nbsp;&nbsp; {'|'} &nbsp;&nbsp; {'Black'} &nbsp;&nbsp; {'|'} &nbsp;&nbsp;{' '}
                  {'M'}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'end',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant='body2' sx={{ fontSize: '1rem', fontWeight: '800' }}>
                  Total $60
                </Typography>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                  <Button
                    variant='contained'
                    color='secondary'
                    sx={{ width: '1.2rem', height: '1.2rem', p: 0, minWidth: 0 }}
                  >
                    <Typography variant='body2' sx={{ fontWeight: '800' }}>
                      -
                    </Typography>
                  </Button>
                  <Typography variant='body2' sx={{ fontWeight: '800' }}>
                    2
                  </Typography>
                  <Button
                    variant='contained'
                    color='secondary'
                    sx={{ width: '1.2rem', height: '1.2rem', p: 0, minWidth: 0 }}
                  >
                    <Typography variant='body2' sx={{ fontWeight: '800' }}>
                      +
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Paper>
    </Box>
  )
}

const cardImgStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  borderRadius: '0.8rem',
}

export default CartCard

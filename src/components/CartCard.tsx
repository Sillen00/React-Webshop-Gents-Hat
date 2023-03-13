import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Box, Button, Paper, Typography } from '@mui/material'
import { CSSProperties } from 'react'
import { products } from '../../data'

function CartCard() {
  return (
    <Paper elevation={3} sx={{ borderRadius: '0.8rem' }}>
      <Box
        data-cy='cart-item'
        sx={{
          display: 'flex',
          maxHeight: '100px',
          '@media (min-width: 768px)': { maxHeight: '150px' },
        }}
      >
        <Box sx={{ width: '100px', '@media (min-width: 768px)': { width: '150px' } }}>
          <img style={cardImgStyle} src={products[0].image} alt={products[0].description} />
        </Box>
        <Box
          sx={{
            width: '100%',
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
            <Typography
              variant='h3'
              sx={{ fontSize: '1.5rem', '@media (min-width: 768px)': { fontSize: '2rem' } }}
            >
              {products[0].title}
            </Typography>
            <Typography
              sx={{ position: 'relative', top: '0', '@media (min-width: 768px)': { top: '50px' } }}
            >
              <DeleteOutlineIcon color='error' sx={{'@media (min-width: 768px)': { fontSize: "2rem" }}} />
            </Typography>
          </Box>
          <Box sx={{ flexGrow: '4', display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant='body2'
              color='secondary.dark'
              sx={{
                fontWeight: '700',
                fontSize: '0.8rem',
                '@media (min-width: 768px)': { fontSize: '1rem' },
              }}
            >
              {'$30'} &nbsp;&nbsp; {'|'} &nbsp;&nbsp; {'Black'} &nbsp;&nbsp; {'|'} &nbsp;&nbsp;
              {'M'}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '5px',
                position: 'relative',
                top: '38px',
                '@media (min-width: 768px)': { top: '10px', right: '255px' },
              }}
            >
              <Button
                data-cy='decrease-quantity-button'
                variant='contained'
                color='secondary'
                sx={{
                  width: '1.2rem',
                  height: '1.2rem',
                  p: 0,
                  minWidth: 0,
                  '@media (min-width: 768px)': {
                    width: '1.5rem',
                    height: '1.5rem',
                    position: 'relative',
                    top: '4px',
                  },
                }}
              >
                <Typography variant='body2' sx={{ fontWeight: '800' }}>
                  -
                </Typography>
              </Button>
              <Typography
                data-cy='product-quantity'
                variant='body2'
                sx={{ fontWeight: '800', '@media (min-width: 768px)': { fontSize: '1.4rem' } }}
              >
                2
              </Typography>
              <Button
                data-cy='increase-quantity-button'
                variant='contained'
                color='secondary'
                sx={{
                  width: '1.2rem',
                  height: '1.2rem',
                  p: 0,
                  minWidth: 0,
                  '@media (min-width: 768px)': {
                    width: '1.5rem',
                    height: '1.5rem',
                    position: 'relative',
                    top: '4px',
                  },
                }}
              >
                <Typography variant='body2' sx={{ fontWeight: '800' }}>
                  +
                </Typography>
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography
              variant='body2'
              sx={{
                fontSize: '1rem',
                fontWeight: '800',
                '@media (min-width: 768px)': { fontSize: '1.2rem' },
              }}
            >
              Total $60
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

const cardImgStyle: CSSProperties = {
  // width: '100%',
  height: '100%',
  borderRadius: '0.8rem',
}

export default CartCard

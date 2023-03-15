import * as Icon from '@mui/icons-material'
import { Box, Button, Paper, SxProps, Theme, Typography } from '@mui/material'
import { Container } from '@mui/system'

function OrderConfirmation() {
  return (
   <Container  >

    <Paper
      elevation={3}
      sx={{
        // mx: '2rem',
        mt: '4rem',
        // py: '2rem',
        // px: '1rem',
        borderRadius: '1rem',
        
      }}
    >
      <Box sx={confirmStyleBoxSX}>
        <Typography variant='h6' sx={typographyStylesSX}>
          Your order has been recived!
        </Typography>
        <Icon.CheckCircleOutline sx={iconStylesSX} color='success' />
        <Typography variant='body2' sx={typographyStylesSX}>
          Thank you for your purchase
        </Typography>
        <Typography variant='body2' sx={typographyStylesSX}>
          Your order number is
        </Typography>
        <Typography sx={typographyStylesSX}>
          <b>#{Math.floor(Math.random() * 100000) + 100000}</b>
        </Typography>
        <Button sx={buttonStyleSX} href='/' variant='contained'>
          Continue Shooping
        </Button>
      </Box>
    </Paper>
   </Container>
  )
}

const confirmStyleBoxSX: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  py: '2rem',
  px: '1rem',
  gap: '1rem',
  borderRadius: '1rem',
  backgroundColor: 'white',
  [theme.breakpoints.up('md')]: {
    py: '4rem',

    h6: {
      fontSize: '1.9rem',
    },
  },
})

const typographyStylesSX: SxProps<Theme> = theme => ({
  textAlign: 'center',
  fontWeight: '600',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '1.3rem',
    variant: 'h1',
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '3rem',
      color: 'red',
      // Fix breakpoints!!!
    },
  },
})

const iconStylesSX: SxProps<Theme> = theme => ({
  fontSize: '30px',
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
})

const buttonStyleSX: SxProps<Theme> = theme => ({
  fontWeight: '600',
  [theme.breakpoints.between('sm', 'md')]: {
    scale: '1.2',
  },
})

export default OrderConfirmation

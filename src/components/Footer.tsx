import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Button, SxProps, TextField, Theme, Typography } from '@mui/material'
import '../index.css'

function Footer() {
  return (
    <Box sx={footerStyle}>
      <Box sx={socialMediaContainer}>
        <Typography gutterBottom={true} variant='h3'>
          Gents' Hat
        </Typography>
        <Box sx={socialMediaIcons}>
          <Facebook fontSize='large' />
          <Instagram fontSize='large' />
          <Twitter fontSize='large' />
        </Box>
      </Box>
      <Box sx={newsletterContainer}>
        <Typography gutterBottom={true} variant='h4'>
          Join our newsletter
        </Typography>
        <Box sx={inputContainer}>
          <TextField
            sx={inputForm}
            InputProps={{ style: { fontFamily: 'Lora' } }}
            fullWidth={true}
            id='outlined-basic'
            label=''
            variant='outlined'
          />
          <Button sx={joinButton} variant='contained'>
            Join
          </Button>
        </Box>
        <Typography sx={smallText} variant='caption'>
          This form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service
          apply
        </Typography>
        <Typography sx={{ paddingTop: '1rem' }} variant='body2'>
          Copyright 2023. Design by Gent’s Hat{' '}
        </Typography>
      </Box>
      <Box sx={contactContainer}>
        <Typography gutterBottom={true} variant='h4'>
          Contact
        </Typography>
        <Typography variant='body2'>
          shop@gentshat.com
          <br />
          <br />
        </Typography>
        <Typography sx={smallText} variant='body2'>
          The Gents' Hat Company
          <br />
          720 Ninth Avenue
          <br />
          New York, NY 10028
        </Typography>
      </Box>
    </Box>
  )
}

const footerStyle: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'space-around',
  height: 'var(--footer-height-xl)',
  width: '100%',
  color: 'white',
  background: 'black',
  borderTop: '5px solid #DAB90C',
  paddingTop: '1.5rem',
  overflow: 'hidden',
  boxShadow:
    '0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)',
  [theme.breakpoints.down('lg')]: {
    height: 'var(--footer-height-lg)',
  },
  [theme.breakpoints.down('md')]: {
    height: 'var(--footer-height-md)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'var(--footer-height-sm)',
  },
})

const socialMediaContainer: SxProps<Theme> = theme => ({
  
})

const joinButton: SxProps<Theme> = theme => ({
  width: '7rem',
  marginLeft: '1rem',
  fontFamily: 'Lora',
  fontWeight: 'bold',
  fontSize: '1.3rem',
})

const inputContainer: SxProps<Theme> = theme => ({
  display: 'flex',
  paddingTop: '0.5rem',
  marginBottom: '1rem',
})

const inputForm: SxProps<Theme> = theme => ({
  backgroundColor: '#DCDCDC',
  borderRadius: '5px',
  width: '26rem',
  fontFamily: 'Arial',
})

const smallText: SxProps<Theme> = theme => ({
  color: '#AAA',
})

const socialMediaIcons: SxProps<Theme> = theme => ({
  '& > *': {
    marginRight: '1rem',
  },
})

const newsletterContainer: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '2.1rem',

  [theme.breakpoints.down('md')]: {
    alignSelf: 'flex-end',
  },
  [theme.breakpoints.down('sm')]: {},
})

const contactContainer: SxProps<Theme> = theme => ({
  justifyContent: 'space-around',
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
})

export default Footer

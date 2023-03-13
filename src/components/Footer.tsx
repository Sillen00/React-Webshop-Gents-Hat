import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Button, Snackbar, SxProps, TextField, Theme, Typography } from '@mui/material'
import { useState } from 'react'
import '../index.css'

function Footer() {
  const [inputValue, setInputValue] = useState('')

  const handleJoin = () => {
    setInputValue('')
  }

  return (
    <Box sx={footerStyle}>
      <Box sx={footerContent}>
        <Box>
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
          <Typography sx={{ margin: '1rem' }} align='center' gutterBottom={true} variant='h4'>
            Join our newsletter
          </Typography>
          <Box sx={inputContainer}>
            <TextField
              sx={inputField}
              InputProps={{ style: { fontFamily: 'Lora' } }}
              fullWidth={true}
              id='outlined-basic'
              placeholder='E-mail'
              variant='outlined'
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <Button sx={joinButton} variant='contained' onClick={handleJoin}>
              Join
            </Button>
          </Box>
          <Typography sx={{ color: '#AAA', margin: '1rem' }} align='center' variant='caption'>
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
          <Typography sx={{ color: '#AAA' }} variant='body2'>
            The Gents' Hat Company
          </Typography>
          <Typography sx={{ color: '#AAA' }} variant='body2'>
            720 Ninth Avenue
          </Typography>
          <Typography sx={{ color: '#AAA' }} variant='body2'>
            New York, NY 10028
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

const footerStyle: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
  height: 'var(--footer-height-xl)',
  width: '100%',
  color: 'white',
  background: 'black',
  borderTop: '5px solid #DAB90C',
  paddingTop: '1.5rem',
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

const footerContent: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: '100rem',
  [theme.breakpoints.down('xl')]: {
    width: '70rem',
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const socialMediaIcons: SxProps<Theme> = theme => ({
  '& > *': {
    marginRight: '1rem',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    justifyContent: 'center',
    '& > *': {
      marginLeft: '1rem',
    },
  },
})

const newsletterContainer: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '2.1rem',
  [theme.breakpoints.down('lg')]: {
    paddingBottom: '0rem',
    order: 3,
  },
})

const inputContainer: SxProps<Theme> = theme => ({
  display: 'flex',
  paddingTop: '0.5rem',
  marginBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
})

const inputField: SxProps<Theme> = theme => ({
  backgroundColor: '#DCDCDC',
  borderRadius: '5px',
  width: '30rem',
  fontFamily: 'Arial',
  [theme.breakpoints.down('xl')]: {
    width: '20rem',
  },
  [theme.breakpoints.down('lg')]: {
    width: '30rem',
  },
  [theme.breakpoints.down('md')]: {
    width: '20rem',
  },
  [theme.breakpoints.down('sm')]: {
    width: '15rem',
  },
})

const joinButton: SxProps<Theme> = theme => ({
  width: '7rem',
  marginLeft: '1rem',
  fontFamily: 'Lora',
  fontWeight: 'bold',
  fontSize: '1.3rem',
  [theme.breakpoints.down('sm')]: {
    alignSelf: 'center',
    marginLeft: '0rem',
    marginTop: '0.8rem',
  },
})

const contactContainer: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
  },
})

export default Footer

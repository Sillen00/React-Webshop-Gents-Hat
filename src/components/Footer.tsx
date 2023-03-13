import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, SxProps, Theme, Typography } from '@mui/material'
import '../index.css'

function Footer() {
  return (
    <Box sx={footerStyle}>
      <Box sx={socialMediaContainer}>
        <Typography variant='h3'>Gents Hats</Typography>
        <Box sx={socialMediaIcons}>
          <Facebook fontSize='large'/>
          <Instagram fontSize='large'/>
          <Twitter fontSize='large'/>
        </Box>
      </Box>
      <Box sx={newsletterContainer}>
        <Typography variant='h4'>Newsletter</Typography>
        <Typography variant='body2'>Input field</Typography>
      </Box>
      <Box sx={contactContainer}>
        <Typography variant='h3'>Contact</Typography>
        <Typography variant='body2'>Information</Typography>
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
  paddingTop: '1rem',
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

const socialMediaIcons: SxProps<Theme> = theme => ({
  display: 'flex',
  width: '17rem',
  paddingTop: '0.5rem',
  '& > *': {
    marginRight: '1rem'
  }
})

const newsletterContainer: SxProps<Theme> = theme => ({
  justifyContent: 'space-around',
  paddingTop: '2rem',
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

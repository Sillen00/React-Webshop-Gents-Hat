import { Box, SxProps, Theme, Typography } from '@mui/material'
import '../index.css'

function Footer() {
  return (
    <Box sx={footerStyle}>
      <Typography variant='h3'>Gents Hats</Typography>
      <Typography variant='h3'>Gents Hats</Typography>
      <Typography variant='h3'>Gents Hats</Typography>
      <Typography variant='h3'>Gents Hats</Typography>
      <Typography variant='h3'>Gents Hats</Typography>
      <Typography variant='h3'>Gents Hats</Typography>
      <Typography variant='h3'>Gents Hats</Typography>
    </Box>
  )
}

const footerStyle: SxProps<Theme> = theme => ({
  height: 'var(--footer-height-xl)',
  width: '100%',
  color: 'white',
  background: 'black',
  borderTop: '5px solid #DAB90C',
  padding: '1rem',
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

export default Footer

import { Box, SxProps, Theme, Typography } from '@mui/material'
import '../index.css';

function Footer() {
  return (
    <Box sx={footerStyle}>
      <Typography variant="h3">Gents Hats</Typography>
      <Typography variant="h3">Gents Hats</Typography>
      <Typography variant="h3">Gents Hats</Typography>
      <Typography variant="h3">Gents Hats</Typography>
      <Typography variant="h3">Gents Hats</Typography>
      <Typography variant="h3">Gents Hats</Typography>
      <Typography variant="h3">Gents Hats</Typography>
    </Box>
  )
}

const footerStyle: SxProps<Theme> = {
  height: 'var(--footer-height)',
  width: '100%',
  color: 'white',
  background: 'black',
  borderTop: '5px solid #DAB90C',
  padding: '1rem',
  overflow: 'hidden'
}

export default Footer

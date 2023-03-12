import { Box, SxProps, Theme, Typography } from '@mui/material'

function Footer() {
  return (
    <Box sx={footerStyle}>
      <Typography variant="h3">Gents Hats</Typography>
    </Box>
  )
}

const footerStyle: SxProps<Theme> = {
  height: '18rem',
  width: '100%',
  color: 'white',
  background: 'black',
  borderTop: '5px solid #DAB90C',
}

export default Footer

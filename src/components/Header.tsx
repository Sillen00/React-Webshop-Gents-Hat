import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { AppBar, Box, SxProps, Theme, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import adminIcon from '../../public/icons/adminIcon.png'

function Header() {
  return (
    <AppBar sx={headerStyleSx}>
      <Typography variant='h4'>Gents Hats</Typography>
      <Box sx={iconWrapperStylesSX}>
        <NavLink to=''>
          <img src={adminIcon} />
        </NavLink>
        <NavLink to='/cart'>
          {/* ToDO 
          Add a popper for the Cart */}
        <ShoppingCartIcon sx={iconStylesSX} />
        </NavLink>
      </Box>
    </AppBar>
  )
}

const headerStyleSx: SxProps<Theme> = theme => ({
  backgroundColor: 'black',
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10px',
  position: 'static',
  borderBottom: '5px solid #DAB90C',
  // boxShadow: 'none',
})

const iconWrapperStylesSX: SxProps<Theme> = theme => ({
  display: 'flex',
  alignItems: 'baseline',
  gap: '10px',
})

const iconStylesSX: SxProps<Theme> = theme => ({
  fontSize: '40px',
  
  color: 'white',
})

export default Header

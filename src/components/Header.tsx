import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { AppBar, IconButton, SxProps, Theme, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <AppBar sx={headerStyleSx} position='fixed'>
      <Typography variant='h3'>Gents Hats</Typography>
      <NavLink to='./'>
        <p>Home</p>
      </NavLink>

      <NavLink to='/cart'>
        <p>Cart</p>
      </NavLink>
      <NavLink to='/cart'>
        <IconButton color='inherit'>
          <ShoppingCartIcon />
        </IconButton>
      </NavLink>
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
  padding: '0 20px',
})

export default Header

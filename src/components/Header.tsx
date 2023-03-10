import { NavLink } from 'react-router-dom'
import { Typography } from '@mui/material'

function Header() {
  return (
    <header style={{ background: 'lightgray' }}>
      <Typography variant="h3">Gents Hats</Typography>
      <NavLink to='./'>
        <p>Home</p>
      </NavLink>

      <NavLink to='/cart'>
        <p>Cart</p>
      </NavLink>
    </header>
  )
}

export default Header

import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header style={{ background: 'lightgray' }}>
      <h1>Gents Hats</h1>
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

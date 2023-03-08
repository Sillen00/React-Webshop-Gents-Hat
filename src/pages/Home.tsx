import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h2>Home</h2>
      <p>Here is home page with out products</p>
      <Link to='./product-description'>
        <img style={hatStyle} src='../public/images/bowler.jpeg' />
      </Link>
    </>
  )
}

const hatStyle: CSSProperties = {
  width: '10rem',
}

export default Home

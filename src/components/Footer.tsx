import { CSSProperties } from 'react'

function Footer() {
  return <footer style={rootStyle}></footer>
}

const rootStyle: CSSProperties = {
  height: '8rem',
  width: '100%',
  position: 'fixed',
  bottom: 0,
  left: 0,
  color: 'white',
  background: 'black',
  borderTop: '5px solid #DAB90C',
}

export default Footer

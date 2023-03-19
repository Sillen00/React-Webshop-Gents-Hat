import { Snackbar } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import ScrollToTop from './hooks/ScrollToTop'

function App() {
  return (
    <div>
      <ScrollToTop />

        <Header />
        <Snackbar data-cy='added-to-cart-toast' />


      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App

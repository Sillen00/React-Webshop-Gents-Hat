import { createTheme, ThemeProvider } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import AdminDialog from './components/AdminDialog'
import { CartProvider } from './contexts/CartContext'
import { FormProvider } from './contexts/FormContext'
import { ProductsProvider } from './contexts/ProductsContext'
import './index.css'
import Admin from './pages/Admin'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import OrderConfirmation from './pages/OrderConfirmation'
import ProductDescription from './pages/ProductDescription'

declare module '@mui/material/styles' {
  interface ThemeOptions {
    h1?: {
      fontWeight?: 900
    }
    h3?: {
      fontSize?: string
      fontFamily?: string
    }
    body1?: {
      fontFamily?: string
      fontSize?: string
    }
    body2?: {
      fontFamily?: string
      fontSize?: string
    }
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#DAB90C',
    },
    secondary: {
      main: '#DCDCDC',
      dark: '#505050',
    },
  },
  typography: {
    fontFamily: 'cinzel',
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },

    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Lora',
    },
    body2: {
      fontFamily: 'Lora',
    },
    caption: {
      fontFamily: 'Lora',
    },
  },
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/product/:id' element={<ProductDescription />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='admin' element={<Admin />}>
        <Route path='product/:id' element={<AdminDialog />} />
      </Route>
      <Route path='confirmation' element={<OrderConfirmation />} />
      <Route path='*' element={<h2>404 not found</h2>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <FormProvider>
          <CartProvider>
            <SnackbarProvider maxSnack={3}>
              <RouterProvider router={router} />
            </SnackbarProvider>
          </CartProvider>
        </FormProvider>
      </ProductsProvider>
    </ThemeProvider>
  </React.StrictMode>
)

import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import './index.css'
import Cart from './pages/Cart'
import Confirm from './pages/Confirm'
import Home from './pages/Home'
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
    },
  },
  typography: {
    fontFamily: 'cinzel',
    h1: {
      fontWeight: 900,
    },
    h3: {
      fontWeight: 600,
    },
    body2: {
      fontFamily: 'Lora',
    },
  },
})
// X [ERROR] Two output files share the same path but have different contents: node_modules\.vite\deps_temp\@mui_material_Styles.js

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='product-description' element={<ProductDescription />} />
      <Route path='cart' element={<Cart />} />
      <Route path='confirm' element={<Confirm />} />
      <Route path='*' element={<h2>404 not found</h2>} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)

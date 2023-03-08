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
    <RouterProvider router={router} />
  </React.StrictMode>
)

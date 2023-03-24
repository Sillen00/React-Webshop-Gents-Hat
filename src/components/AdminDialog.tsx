import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useProducts } from '../contexts/ProductsContext'
import AdminProductForm from './AdminProductForm'

function AdminDialog() {
  const navigate = useNavigate()
  const params = useParams()
  const { databaseProducts } = useProducts()
  const product = databaseProducts.find(p => p.id === params.id)

  const handleSave = () => {
    navigate('/admin')
  }

  return (
        <AdminProductForm product={product} onSave={handleSave} />
  )
}

export default AdminDialog

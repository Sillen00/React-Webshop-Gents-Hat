import { useNavigate, useParams } from 'react-router-dom'
import AdminProductForm from '../components/AdminProductForm'
import { useProducts } from '../contexts/ProductsContext'

function AdminUpdateDatabase() {
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

export default AdminUpdateDatabase

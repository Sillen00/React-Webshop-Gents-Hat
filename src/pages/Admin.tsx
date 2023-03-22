import { Product, products } from '../../data'
import ProductCard from '../components/ProductCard'

function Admin() {
  return (
    <>
      <h2>Admin</h2>
      <p>Här kommer vi ha ett formulär och produkter.</p>

      {products.map(product => (
          <h3>{product.title}</h3>
      ))}
    </>
  )
}

export default Admin

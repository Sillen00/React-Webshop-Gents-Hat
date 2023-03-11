import { useParams } from 'react-router-dom'
import { Product, products } from '../../data'

function ProductDescription() {
  const { id } = useParams<{ id: string }>()
  const product: Product | undefined = products.find(p => p.id === id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: $ {product.price}</p>
    </>
  )
}

export default ProductDescription

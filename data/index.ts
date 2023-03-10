export interface Product {
  id: string
  image: string
  title: string
  description: string
  price: number
  size: string
  color: string
  inStock: boolean
}

export interface CartItem extends Product {
  quantity: number
}

/**
 * function that returns a unique Id, both numbers and letters
 */
export const generateId = () => {
  const newId = Math.floor(1 + Math.random() * 0x1000)
    .toString(16)
    .substring(1)
  return newId
}

export const products: Product[] = [
  {
    image: '../public/images/aberdeen.png',
    title: 'Aberdeen',
    description:
      'Aberdeen. The top is reinforced with a plywood board under the rattan. Dimensions: Width 41 cm, height 71 cm, depth 31 cm.',
    price: 69,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'e1',
  },
  {
    image: '../public/images/bowler.jpeg',
    title: 'Bowler Hat',
    description: 'Bowler Hat, description',
    price: 129,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'd2',
  },
  {
    image: '../public/images/outback.jpeg',
    title: 'Outback',
    description: 'Outback, description',
    price: 139,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'c1',
  },
  {
    image: '../public/images/panama.png',
    title: 'Panama',
    description:
      'Panama. Rattan bedside table with shelf underneath. The top is reinforced with a plywood board under the rattan. Dimensions: Width 41 cm, height 71 cm, depth 31 cm. Leg height 22 cm. Height to the upper edge of the lower shelf 25 cm. Dimensions between the shelves 42.5 cm.',
    price: 119,
    size: 'M',
    color: 'Black',
    inStock: false,
    id: 'f4',
  },
  {
    image: '../public/images/stockman.png',
    title: 'Stockman',
    description:
      'Stockman. Upholstered headboard attached to the wall (two hooks on the back). Wooden frame (pine). Upholstery in velvet of polyester and filling of polyether. Width 95 cm. Height 61.5 cm. Depth 7.5 cm.',
    price: 95,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'e6',
  },
  {
    image: '../public/images/straw.jpeg',
    title: 'Straw Hat',
    description:
      'Straw hat. Side table / cabinet in solid mango wood with wax-treated surface. Two doors with wooden handles and soft closing. The cabinet is divided inside and has a fixed shelf. Dimensions between shelves approx. 27 cm. Clear height under furniture 14 cm. Delivered assembled.',
    price: 79,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a3',
  },
  {
    image: '../public/images/tophat.jpeg',
    title: 'Top Hat',
    description:
      'Top hat. Side table / cabinet in solid mango wood with wax-treated surface. Two doors with wooden handles and soft closing. The cabinet is divided inside and has a fixed shelf. Dimensions between shelves approx. 27 cm. Clear height under furniture 14 cm. Delivered assembled.',
    price: 129,
    size: 'M',
    color: 'Black',
    inStock: false,
    id: 'a3',
  },
  {
    image: '../public/images/traveller.jpeg',
    title: 'Traveller Hat',
    description:
      'Traveller hat. Side table / cabinet in solid mango wood with wax-treated surface. Two doors with wooden handles and soft closing. The cabinet is divided inside and has a fixed shelf. Dimensions between shelves approx. 27 cm. Clear height under furniture 14 cm. Delivered assembled.',
    price: 119,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a3',
  },
  {
    image: '../public/images/woolfelt.jpeg',
    title: 'Woolfelt Hat',
    description:
      'Woolfelt hat. Side table / cabinet in solid mango wood with wax-treated surface. Two doors with wooden handles and soft closing. The cabinet is divided inside and has a fixed shelf. Dimensions between shelves approx. 27 cm. Clear height under furniture 14 cm. Delivered assembled.',
    price: 109,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a3',
  },
]

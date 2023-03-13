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

export const test = 22

export const products: Product[] = [
  {
    image: '../images/aberdeen.png',
    title: 'Aberdeen',
    description: 'Aberdeen. description',
    price: 69,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'e1',
  },
  {
    image: '../images/bowler.jpeg',
    title: 'Bowler Hat',
    description: 'Bowler Hat, description',
    price: 129,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'd2',
  },
  {
    image: '../images/panama.png',
    title: 'Panama',
    description: 'Panama. description',
    price: 119,
    size: 'M',
    color: 'Black',
    inStock: false,
    id: 'f4',
  },
  {
    image: '../images/outback.jpeg',
    title: 'Outback',
    description: 'Outback, description',
    price: 139,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'c1',
  },
  {
    image: '../images/stockman.jpeg',
    title: 'Stockman',
    description: 'Stockman. description',
    price: 95,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'e6',
  },
  {
    image: '../images/straw.jpeg',
    title: 'Straw Hat',
    description: 'Straw hat. description',
    price: 79,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a3',
  },
  {
    image: '../images/western.jpg',
    title: 'Western Hat',
    description: 'Western hat. description',
    price: 119,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a2',
  },
  {
    image: '../images/tophat.jpeg',
    title: 'Top Hat',
    description: 'Top hat. description',
    price: 129,
    size: 'M',
    color: 'Black',
    inStock: false,
    id: 'a1',
  },
  {
    image: '../images/trilby.jpeg',
    title: 'Trilby Hat',
    description: 'Trilby hat. description',
    price: 109,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a8',
  },
  {
    image: '../images/woolfelt.jpg',
    title: 'Woolfelt Hat',
    description: 'Woolfelt hat. description',
    price: 109,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a4',
  },
  {
    image: '../images/fedora.jpeg',
    title: 'Fedora Hat',
    description: 'Fedora hat. description',
    price: 59,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a7',
  },
  {
    image: '../images/stoutmoss.jpeg',
    title: 'Stout Hat',
    description: 'Stout hat. description',
    price: 69,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a6',
  },
]

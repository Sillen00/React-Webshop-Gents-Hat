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
    image: '../public/images/aberdeen.png',
    title: 'Aberdeen',
    description: 'Aberdeen. description',
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
    image: '../public/images/panama.png',
    title: 'Panama',
    description: 'Panama. description',
    price: 119,
    size: 'M',
    color: 'Black',
    inStock: false,
    id: 'f4',
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
    image: '../public/images/stockman.jpeg',
    title: 'Stockman',
    description: 'Stockman. description',
    price: 95,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'e6',
  },
  {
    image: '../public/images/straw.jpeg',
    title: 'Straw Hat',
    description: 'Straw hat. description',
    price: 79,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a3',
  },
  {
    image: '../public/images/tophat.jpeg',
    title: 'Top Hat',
    description: 'Top hat. description',
    price: 129,
    size: 'M',
    color: 'Black',
    inStock: false,
    id: 'a1',
  },
  {
    image: '../public/images/traveller.jpeg',
    title: 'Traveller Hat',
    description: 'Traveller hat. description',
    price: 119,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a2',
  },
  {
    image: '../public/images/woolfelt.jpg',
    title: 'Woolfelt Hat',
    description: 'Woolfelt hat. description',
    price: 109,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a4',
  },
  {
    image: '../public/images/trilby.jpeg',
    title: 'Trilby Hat',
    description: 'Trilby hat. description',
    price: 109,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a8',
  },
  {
    image: '../public/images/fedora.jpeg',
    title: 'Fedora Hat',
    description: 'Fedora hat. description',
    price: 59,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a7',
  },
  {
    image: '../public/images/stoutmoss.jpeg',
    title: 'Stout Hat',
    description: 'Stout hat. description',
    price: 69,
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a6',
  },
]

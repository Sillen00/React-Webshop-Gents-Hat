export interface Product {
  id: string
  image: string
  title: string
  shortDescription: string
  description: string
  price: number
  details: { id: number; detail: string }[]
  size: string
  color: string
  inStock: boolean
}

export interface CartItem extends Product {
  quantity: number
}

export const generateId = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const letter = letters.charAt(Math.floor(Math.random() * letters.length))
  const secondLetter = letters.charAt(Math.floor(Math.random() * letters.length))
  const numbers = Math.floor(10 + Math.random() * 10000)
  const newId = letter + secondLetter + numbers.toString()
  return newId
}

export const products: Product[] = [
  {
    id: 'EL1477',
    image: '../images/aberdeen.png',
    title: 'Aberdeen',
    shortDescription: 'Aberdeen. description',
    description:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 69,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
      { id: 4, detail: 'Lorem ipsum' },
    ],
    size: 'L',
    color: 'Dark brown',
    inStock: true,
  },
  {
    image: '../images/bowler.png',
    title: 'Bowler Hat',
    shortDescription: 'Bowler Hat, description',
    description:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 129,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'd2',
  },
  {
    image: '../images/panama.png',
    title: 'Panama',
    shortDescription: 'Panama. description',
    description:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 119,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
      { id: 4, detail: 'Lorem ipsum' },
      { id: 5, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Beige',
    inStock: false,
    id: 'f4',
  },
  {
    image: '../images/outback.png',
    title: 'Outback',
    shortDescription: 'Outback, description',
    description:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 139,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'c1',
  },
  {
    image: '../images/stockman.png',
    title: 'Stockman',
    shortDescription: 'Stockman. description',
    description:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 95,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
    ],
    size: 'S',
    color: 'Brown',
    inStock: true,
    id: 'e6',
  },
  {
    image: '../images/straw.png',
    title: 'Straw Hat',
    shortDescription: 'Straw hat. description',
    description:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 79,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Straw hat colored',
    inStock: true,
    id: 'a3',
  },
  {
    image: '../images/western.png',
    title: 'Western Hat',
    shortDescription: 'Western hat. description',
    description:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 119,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
    ],
    size: 'L',
    color: 'Brown',
    inStock: true,
    id: 'a2',
  },
  {
    image: '../images/tophat.png',
    title: 'Top Hat',
    shortDescription: 'Top hat. description',
    description:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 129,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
      { id: 4, detail: 'Lorem ipsum' },
    ],
    size: 'L',
    color: 'Black',
    inStock: false,
    id: 'a1',
  },
  {
    image: '../images/trilby.png',
    title: 'Trilby Hat',
    shortDescription: 'Trilby hat. description',
    description:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 109,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
      { id: 4, detail: 'Lorem ipsum' },
      { id: 5, detail: 'Lorem ipsum' },
    ],
    size: 'S',
    color: 'Black',
    inStock: true,
    id: 'a8',
  },
  {
    image: '../images/woolfelt.png',
    title: 'Woolfelt Hat',
    shortDescription: 'Woolfelt hat. description',
    description:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 109,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Dark gray',
    inStock: true,
    id: 'a4',
  },
  {
    image: '../images/fedora.png',
    title: 'Fedora Hat',
    shortDescription: 'Fedora hat. description',
    description:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 59,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Red',
    inStock: true,
    id: 'a7',
  },
  {
    image: '../images/stoutmoss.png',
    title: 'Stout Hat',
    shortDescription: 'Stout hat. description',
    description:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 69,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
      { id: 4, detail: 'Lorem ipsum' },
    ],
    size: 'L',
    color: 'Gray',
    inStock: true,
    id: 'a6',
  },
]


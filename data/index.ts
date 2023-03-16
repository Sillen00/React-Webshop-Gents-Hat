export interface Product {
  id: string
  image: string
  title: string
  shortDescription: string
  longDescription: string
  price: number
  details: { id: number; detail: string }[]
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
    shortDescription: 'Aberdeen. description',
    longDescription:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 69,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
      { id: 4, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'e1',
  },
  {
    image: '../images/bowler.jpeg',
    title: 'Bowler Hat',
    shortDescription: 'Bowler Hat, description',
    longDescription:
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
    longDescription:
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
    color: 'Black',
    inStock: false,
    id: 'f4',
  },
  {
    image: '../images/outback.jpeg',
    title: 'Outback',
    shortDescription: 'Outback, description',
    longDescription:
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
    image: '../images/stockman.jpeg',
    title: 'Stockman',
    shortDescription: 'Stockman. description',
    longDescription:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 95,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'e6',
  },
  {
    image: '../images/straw.jpeg',
    title: 'Straw Hat',
    shortDescription: 'Straw hat. description',
    longDescription:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 79,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a3',
  },
  {
    image: '../images/western.jpg',
    title: 'Western Hat',
    shortDescription: 'Western hat. description',
    longDescription:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 119,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a2',
  },
  {
    image: '../images/tophat.jpeg',
    title: 'Top Hat',
    shortDescription: 'Top hat. description',
    longDescription:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 129,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
      { id: 4, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Black',
    inStock: false,
    id: 'a1',
  },
  {
    image: '../images/trilby.jpeg',
    title: 'Trilby Hat',
    shortDescription: 'Trilby hat. description',
    longDescription:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 109,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
      { id: 4, detail: 'Lorem ipsum' },
      { id: 5, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a8',
  },
  {
    image: '../images/woolfelt.jpg',
    title: 'Woolfelt Hat',
    shortDescription: 'Woolfelt hat. description',
    longDescription:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 109,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a4',
  },
  {
    image: '../images/fedora.jpeg',
    title: 'Fedora Hat',
    shortDescription: 'Fedora hat. description',
    longDescription:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 59,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a7',
  },
  {
    image: '../images/stoutmoss.jpeg',
    title: 'Stout Hat',
    shortDescription: 'Stout hat. description',
    longDescription:
      'suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet',
    price: 69,
    details: [
      { id: 1, detail: 'Lorem ipsum' },
      { id: 2, detail: 'Lorem ipsum' },
      { id: 3, detail: 'Lorem ipsum' },
      { id: 4, detail: 'Lorem ipsum' },
    ],
    size: 'M',
    color: 'Black',
    inStock: true,
    id: 'a6',
  },
]

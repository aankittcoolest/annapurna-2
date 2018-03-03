import { Item } from './item'
import { Category } from './category'

const PANEERITEMS: Item[] = [
          { itemId: '1', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '2', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '3', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '4', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '5', name: 'Samosa', isSelected: false, imageUrl: '' },
]

const CHAATITEMS: Item[] = [
          { itemId: '6', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '7', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '8', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '9', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '10', name: 'Samosa', isSelected: false, imageUrl: '' },
]

const DESERTITEMS: Item[] = [
          { itemId: '11', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '12', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '13', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '14', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '15', name: 'Samosa', isSelected: false, imageUrl: '' },
]

const MAINCOURSEITEMS: Item[] = [
          { itemId: '16', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '17', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '18', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '19', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '20', name: 'Samosa', isSelected: false, imageUrl: '' },
]

const STALLITEMS: Item[] = [
          { itemId: '21', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '22', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '23', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '24', name: 'Samosa', isSelected: false, imageUrl: '' },
          { itemId: '25', name: 'Samosa', isSelected: false, imageUrl: '' },
]

export const CATEGORIES: Category[] = [
      {
        categoryId: '1',
        categoryName: 'Paneer',
         items: PANEERITEMS
      },
      {
        categoryId:'2',
        categoryName: 'chaat',
         items: CHAATITEMS
      },
      {
        categoryId: '3',
        categoryName: 'deserts',
         items: DESERTITEMS
      },
      {
        categoryId: '4',
        categoryName: 'maincourse',
         items: MAINCOURSEITEMS
      },
      {
        categoryId: '5',
        categoryName: 'stalls',
         items: STALLITEMS
      },
    ]
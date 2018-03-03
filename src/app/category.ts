import { Item } from './item'
export class Category {
    public categoryId: string
    public categoryName: string
    public items: Item[]

    constructor(categoryId, categoryName, items) {
        this.categoryId = categoryId
        this.categoryName = categoryName
        this.items = items
    }
}

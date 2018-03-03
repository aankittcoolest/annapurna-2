export class Item {
    itemId: string
    name: string
    isSelected: boolean
    imageUrl: string

   constructor(itemId, name, isSelected, imageUrl) {
       this.itemId = itemId
       this.name = name
       this.isSelected = isSelected
       this.imageUrl = imageUrl
    }
}

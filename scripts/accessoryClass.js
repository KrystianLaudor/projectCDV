//...................................................................
// Create class Accessory

export default class Accessories {
  constructor(
    accessory,
    price,
    description,
    image = '',
  ) {
    this.accessory = accessory,
      this.price = price,
      this.description = description,
      this.image = image
  }
}

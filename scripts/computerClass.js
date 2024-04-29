//...................................................................
// Create class Computer
export default class Computer {
  constructor(
    procesor,
    price,
    graphicsCard,
    motherboard,
    ram,
    category,
    image = '',
    discSSD = false,
    discHDD = false,
    system = false,
    used = false,
  ) {
    this.procesor = procesor,
      this.price = price,
      this.graphicsCard = graphicsCard,
      this.motherboard = motherboard,
      this.ram = ram,
      this.category = category,
      this.image = image,
      this.discSSD = discSSD,
      this.discHDD = discHDD,
      this.system = system,
      this.used = used
  };
}

class Computer {
  constructor(
    procesor,
    price,
    graphicsCard,
    motherboard,
    category,
    discSDD,
    discHDD = false,
    system = true,
    used = false,
    image = '',
  ) {
    this.Procesor = procesor,
      this.Price = price,
      this.GraphicsCard = graphicsCard,
      this.Motherboard = motherboard,
      this.Category = category,
      this.DiscSDD = discSDD,
      this.DiscHDD = discHDD,
      this.System = system,
      this.Used = used,
      Image = image
  };
}

const computer1 = new Computer('Intel', 2000, 'GTX 1050 Ti', 'MSI', 'Office', 'SSD 1 GB');

console.log(computer1);

class Computer {
  constructor(
    procesor,
    price,
    graphicsCard,
    motherboard,
    RAM,
    category,
    image = '',
    // imageUrl = '',
    discSSD,
    discHDD = false,
    system = true,
    used = false,
  ) {
    this.Procesor = procesor,
      this.Price = price,
      this.GraphicsCard = graphicsCard,
      this.Motherboard = motherboard,
      this.RAMs = RAM,
      this.Category = category,
      this.Image = image,
      // this.ImageUrl = imageUrl,
      this.DiscSSD = discSSD,
      this.DiscHDD = discHDD,
      this.System = system,
      this.Used = used
  };
}

const computer1 = new Computer('Intel Core i3-10100F', 2300, '', 'MSI', '8 GB', 'Office', './assets/computers/computer1.jpg', 'SSD 1 TB');
const computer2 = new Computer('AMD Ryzen 5 5600X', 7410, 'RTX 3060', 'ASUS', '16 GB', 'Home', './assets/computers/computer2.jpg', 'SSD 512 GB', 'HDD 2 TB', true);
const computer3 = new Computer('Intel Core i5-11600K', 7410, 'GTX 1660 Super', 'Gigabyte', '16 GB', 'Gaming', './assets/computers/computer3.jpg', 'SSD 2 TB', false);
const computer4 = new Computer('AMD Ryzen 9 5900X', 17550, 'RTX 3080', 'ASRock', '32 GB', 'Professional', './assets/computers/computer4.jpg', 'SSD 1.5 TB');
const computer5 = new Computer('Intel Core i7-11700K', 11050, 'RTX 3060 Ti', 'MSI', '32 GB', 'Gaming', './assets/computers/computer5.jpg', 'SSD 1 TB', 'HDD 1 TB', false);
const computer6 = new Computer('AMD Ryzen 7 3800X', 5460, 'GTX 1650', 'ASUS', '8 GB', 'Home', './assets/computers/computer6.jpg', 'SSD 512 GB');
const computer7 = new Computer('Intel Core i5-11400F', 3980, 'GTX 1660', 'Gigabyte', '8 GB', 'Office', './assets/computers/computer7.jpg', 'SSD 1.5 TB', false, true);
const computer8 = new Computer('AMD Ryzen 7 5800X', 11700, 'RX 6700 XT', 'ASRock', '16 GB', 'Gaming', './assets/computers/computer8.jpg', 'SSD 2 TB');
const computer9 = new Computer('Intel Core i5-11400', 5460, 'GTX 1050 Ti', 'MSI', '8 GB', 'Office', './assets/computers/computer9.jpg', 'SSD 1 TB');

let computers = [
  computer1,
  computer2,
  computer3,
  computer4,
  computer5,
  computer6,
  computer7,
  computer8,
  computer9
];

console.log(computers);

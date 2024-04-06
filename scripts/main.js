class Computer {
  constructor(
    procesor,
    price,
    graphicsCard,
    motherboard,
    ram,
    category,
    image = '',
    discSSD,
    discHDD = false,
    system = true,
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

// Renaming all files with bash at location ./assets/computer
/* 
i=1
for file in computers/*; do
mv "$file" "computer${i}.jpg"
i=$((i+1))
done
*/

const computer0 = new Computer('Apple iMac 27\"', 10000, 'AMD Radeon Pro 5700 XT', 'Apple', '32 GB', 'Professional', './assets/computers/computer0.jpg', 'SSD 1 TB', false, 'macOS');
const computer1 = new Computer('Apple Mac Pro', 25000, 'AMD Radeon Pro Vega II Duo', 'Apple', '64 GB', 'Professional', './assets/computers/computer1.jpg', 'SSD 4 TB', false, 'macOS');
const computer2 = new Computer('AMD Ryzen 5 5600X', 7410, 'RTX 3060', 'ASUS', '16 GB', 'Home', './assets/computers/computer2.jpg', 'SSD 512 GB', 'HDD 2 TB', true);
const computer3 = new Computer('Intel Core i5-11600K', 7410, 'GTX 1660 Super', 'Gigabyte', '16 GB', 'Gaming', './assets/computers/computer3.jpg', 'SSD 2 TB', 'HDD 1 TB');
const computer4 = new Computer('AMD Ryzen 9 5900X', 17550, 'RTX 3080', 'ASRock', '32 GB', 'Professional', './assets/computers/computer4.jpg', 'SSD 1.5 TB');
const computer5 = new Computer('Intel Core i7-11700K', 11050, 'RTX 3060 Ti', 'MSI', '32 GB', 'Gaming', './assets/computers/computer5.jpg', 'SSD 1 TB', 'HDD 1 TB', false);
const computer6 = new Computer('AMD Ryzen 7 3800X', 5460, 'GTX 1650', 'ASUS', '8 GB', 'Home', './assets/computers/computer6.jpg', 'SSD 512 GB', 'HDD 512 GB');
const computer7 = new Computer('Intel Core i5-11400F', 3980, 'GTX 1660', 'Gigabyte', '8 GB', 'Office', './assets/computers/computer7.jpg', 'SSD 1.5 TB', false, true);
const computer8 = new Computer('AMD Ryzen 7 5800X', 11700, 'RX 6700 XT', 'ASRock', '16 GB', 'Gaming', './assets/computers/computer8.jpg', 'SSD 2 TB', 'HDD 2 TB');
const computer9 = new Computer('Intel Core i5-11400', 5460, 'GTX 1050 Ti', 'MSI', '8 GB', 'Office', './assets/computers/computer9.jpg', 'SSD 1 TB');
const computer10 = new Computer('Apple M1', 3500, 'Apple GPU', 'Apple', '16 GB', 'Professional', './assets/computers/computer10.jpg', 'SSD 512 GB');
const computer11 = new Computer('Intel Core i3-10100F', 2300, '', 'MSI', '8 GB', 'Office', './assets/computers/computer11.jpg', 'SSD 512 GB');

let computers = [
  computer0, computer1, computer2, computer3, computer4, computer5, computer6, computer7, computer8, computer9, computer10, computer11,
];
console.log(computers);

// Declarations
const $formContainer = document.querySelector('#formContainer');
const $backToPcBtn = document.querySelector('#backToPc');


// Generator of pcBoxes that contain data of individual computers
const $pcContainer = document.querySelector('#pcContainer');

let createPcBox = function (pcArray) {
 
  for (let pc of pcArray) {

    const divPcBox = document.createElement('div');
    const divPcImage = document.createElement('div');
    const divPcData = document.createElement('div');
    divPcBox.classList.add('pcBox');
    // divPcBox.addEventListener('click', switchScreen);
    divPcImage.classList.add('pcImage');
    divPcData.classList.add('pcData');

    const pcImage = document.createElement('img');
    pcImage.src = pc['image'];
    divPcImage.appendChild(pcImage);

    for ( let desk in computers[0] ) {

      if(desk === 'image') { continue }
      
      const pSet = document.createElement('p');
      const spanSet = document.createElement('span');
      spanSet.classList.add(desk);

      if(pc[desk] == false || pc[desk] == true) { 
        continue;
      } else {
        spanSet.innerText = pc[desk];
      }

      pSet.innerText = desk.slice(0,1).toUpperCase() + desk.slice(1,desk.length) + ': ';
      pSet.appendChild(spanSet);
      divPcData.appendChild(pSet);
    }

    divPcBox.appendChild(divPcImage);
    divPcBox.appendChild(divPcData);
    $pcContainer.appendChild(divPcBox);
  }
}

createPcBox(computers);

function switchScreen() {
  $pcContainer.classList.toggle('hidden');
  $formContainer.classList.toggle('hidden');
};

function checkPcBox(event) {
  let clickedElement = event.target;
  while (clickedElement !== $pcContainer) {
      if (clickedElement.classList.contains('pcBox')) {
          switchScreen();
          return;
      }
      clickedElement = clickedElement.parentNode;
  }
}

$backToPcBtn.addEventListener('click', switchScreen); // USUNĄĆ POTEM
$pcContainer.addEventListener('click', checkPcBox);





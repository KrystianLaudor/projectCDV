//...................................................................
// Create class Computer and class Accessory
class Computer {
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

class Accessories {
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

//...................................................................
// Renaming all files with bash at location ./assets/computer
/* 
i=1
for file in computers/*; do
mv "$file" "computer${i}.jpg"
i=$((i+1))
done
*/

//...................................................................
// Database of all desktops (PC) and Accessories

const computer0 = new Computer('Apple iMac 27\"', 10000, 'AMD Radeon Pro 5700 XT', 'Apple', '32 GB', 'Professional', './assets/computers/computer0.jpg', '1 TB', false, 'macOS');
const computer1 = new Computer('Apple Mac Pro', 25000, 'AMD Radeon Pro Vega II Duo', 'Apple', '64 GB', 'Professional', './assets/computers/computer1.jpg', '4 TB', false, 'macOS');
const computer2 = new Computer('AMD Ryzen 5 5600X', 6410, 'RTX 3060', 'ASUS', '16 GB', 'Home', './assets/computers/computer2.jpg', '512 GB', '2 TB', 'Win 11');
const computer3 = new Computer('Intel Core i5-11600K', 7210, 'GTX 1660 Super', 'Gigabyte', '16 GB', 'Gaming', './assets/computers/computer3.jpg', '2 TB', '1 TB');
const computer4 = new Computer('AMD Ryzen 9 5900X', 17550, 'RTX 3080', 'ASRock', '32 GB', 'Professional', './assets/computers/computer4.jpg', '1.5 TB', false, 'Win 11');
const computer5 = new Computer('Intel Core i7-11700K', 11050, 'RTX 3060 Ti', 'MSI', '32 GB', 'Gaming', './assets/computers/computer5.jpg', '1 TB', '1 TB');
const computer6 = new Computer('AMD Ryzen 7 3800X', 5460, 'GTX 1650', 'ASUS', '8 GB', 'Home', './assets/computers/computer6.jpg', '512 GB', '512 GB');
const computer7 = new Computer('Intel Core i5-11400F', 6980, 'GTX 1660', 'Gigabyte', '8 GB', 'Office', './assets/computers/computer7.jpg', '1.5 TB', false, 'Win Vista');
const computer8 = new Computer('AMD Ryzen 7 5800X', 11700, 'RX 6700 XT', 'ASRock', '16 GB', 'Gaming', './assets/computers/computer8.jpg', '2 TB', '2 TB', 'Win 10');
const computer9 = new Computer('Intel Core i5-11400', 3460, 'GTX 1050 Ti', 'MSI', '8 GB', 'Office', './assets/computers/computer9.jpg', '1 TB', 'Win 7');
const computer10 = new Computer('Apple M1', 3500, 'Apple GPU', 'Apple', '16 GB', 'Professional', './assets/computers/computer10.jpg', '512 GB', false, 'macOS');
const computer11 = new Computer('Intel Core i3-10100F', 2300, '', 'MSI', '8 GB', 'Office', './assets/computers/computer11.jpg', '512 GB');

let computers = [
  computer0, computer1, computer2, computer3, computer4, computer5, computer6, computer7, computer8, computer9, computer10, computer11,
];
console.log(computers);

const accessories0 = new Accessories('Water cooling Kraken', 699, 'Temperature reduction by 20%', './assets/kraken.jpg');
const accessories1 = new Accessories('Set logitech', 899, 'The perfect set for your computer', './assets/logitech.jpg');
const accessories2 = new Accessories('Dysk Samsung SSD 1 TB', 499, 'Increase your memory', './assets/samsung.jpg');

let accessories = [
  accessories0, accessories1, accessories2
];


//...................................................................
// Declarations
const $formContainer = document.querySelector('#formContainer');
const $backToPcBtn = document.querySelector('#backToPc');
const $chosenPcContainer = document.querySelector('#chosenPcContainer');
const $accContainer = document.querySelector('#accContainer');
const $sum = document.querySelector('#sum');
let sum = 0;
const patterns = {
  firstAndLast: /^\s*[a-zA-Z]+\s+[a-zA-Z]+\s*$/,
}
const $fname = document.querySelector('#fname');
const $leasing = document.getElementById('leasing');
const $cash = document.getElementById('cash');
let summary = 'invalid';

//.................................................................
// Generator of pcBoxes that contain data of individual computers
const $pcContainer = document.querySelector('#pcContainer');

function createStructurePcBox(pc, container, array) {

  const divPcBox = document.createElement('div');
  const divPcImage = document.createElement('div');
  const divPcData = document.createElement('div');
  divPcBox.setAttribute('data-description', JSON.stringify(pc));

  divPcBox.classList.add('pcBox');
  divPcImage.classList.add('pcImage');
  divPcData.classList.add('pcData');
  const pcImage = document.createElement('img');
  pcImage.src = pc['image'];
  divPcImage.appendChild(pcImage);

  // For accessory
  if (container == $accContainer) {
    divPcImage.classList.add('accessImg');
    pcImage.classList.add('accessories');
  }

  for (let desk in array[0]) {
    if (desk === 'image') { continue }

    const pSet = document.createElement('p');
    const spanSet = document.createElement('span');
    spanSet.classList.add(desk);

    if (pc[desk] == false || pc[desk] == true) {
      continue;
    } else {
      spanSet.innerText = pc[desk];
      if (desk === 'price') { spanSet.innerText = pc[desk] + ' PLN' }
    }

    if ((container !== $accContainer) || (desk == 'price')) { pSet.innerText = desk.slice(0, 1).toUpperCase() + desk.slice(1, desk.length) + ': ' };

    pSet.appendChild(spanSet);
    divPcData.appendChild(pSet);
  }

  divPcBox.appendChild(divPcImage);
  divPcBox.appendChild(divPcData);
  container.appendChild(divPcBox);
}


let createPcBox = function (array, container) {
  for (let pc of array) {
    createStructurePcBox(pc, container, array)
  }
}

createPcBox(computers, $pcContainer);
createPcBox(accessories, $accContainer);

//......................................................
// FUNCTIONS

// Switch Screen
function switchScreen() {
  $pcContainer.classList.toggle('hidden');
  $formContainer.classList.toggle('hidden');
};

// Check if clicked PcBox and other functions
function checkPcBox(event) {
  let clickedElement = event.target;
  while (clickedElement !== $pcContainer) {
    if (clickedElement.classList.contains('pcBox')) {
      switchScreen();

      removeAllChild($chosenPcContainer);
      const chosenPc = JSON.parse(clickedElement.getAttribute('data-description'));
      createStructurePcBox(chosenPc, $chosenPcContainer, computers);
      addToSum(chosenPc['price']);
      return;
    }
    clickedElement = clickedElement.parentNode;
  }
}

function removeAllChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
};

function addToSum(...add) {
  sum = sum + add.reduce((total, current) => total + current, 0);
  $sum.innerText = sum;
  return sum;
}

function resetSum() {
  return sum = 0;
}

function addAcc(event) {
  let clickedElement = event.target;
  while (clickedElement !== $accContainer) {
    if (clickedElement.classList.contains('pcBox')) {

      if (clickedElement.classList.contains('addedAcc')) {
        clickedElement.classList.remove('addedAcc');
        addToSum(-JSON.parse(clickedElement.getAttribute('data-description'))['price']);
      } else {
        clickedElement.classList.add('addedAcc');
        addToSum(JSON.parse(clickedElement.getAttribute('data-description'))['price']);
      }
      return;
    }
    clickedElement = clickedElement.parentNode;
  }
}

function resetAddAcc() {
  const $allAddedAcc = $accContainer.querySelectorAll('.addedAcc');
  $allAddedAcc.forEach(div => {
    div.classList.remove('addedAcc');
  })
}

function validate(field, regex) {
  if( regex.test(field.value) ) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

// ADD DATE
function validSummary () {
  if ( ($leasing.checked || $cash.checked) && $fname.classList.contains('valid') ) {
    return summary = 'valid';
  }
}






//......................................................
// AddEventListeners

$fname.addEventListener('change', (e) => {
  console.log($fname.value)
  validate($fname, patterns['firstAndLast']);
})

$pcContainer.addEventListener('click', checkPcBox);
$backToPcBtn.addEventListener('click', () => {
  switchScreen();
  resetAddAcc();
  resetSum();
});
$accContainer.addEventListener('click', addAcc);




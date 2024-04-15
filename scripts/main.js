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
const computer1 = new Computer('Apple Mac Pro', 15000, 'AMD Radeon Pro Vega II Duo', 'Apple', '64 GB', 'Professional', './assets/computers/computer1.jpg', '4 TB', false, 'macOS');
const computer2 = new Computer('AMD Ryzen 5 5600X', 6410, 'RTX 3060', 'ASUS', '16 GB', 'Home', './assets/computers/computer2.jpg', '512 GB', '2 TB', 'Win 11');
const computer3 = new Computer('Intel Core i5-11600K', 7210, 'GTX 1660 Super', 'Gigabyte', '16 GB', 'Gaming', './assets/computers/computer3.jpg', '2 TB', '1 TB');
const computer4 = new Computer('AMD Ryzen 9 5900X', 14550, 'RTX 3080', 'ASRock', '32 GB', 'Professional', './assets/computers/computer4.jpg', '1.5 TB', false, 'Win 11');
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
  priceRange: /^(0{1,})?(0|[1-9]\d{0,4}|30000)$/,
}
const $fname = document.querySelector('#fname');
const $leasing = document.getElementById('leasing');
const $cash = document.getElementById('cash');
const $deliverDateSelect = document.getElementById('deliverDate');
const $secondOption = $deliverDateSelect.options[1];
const $goToSummaryBtn = document.querySelector('#goToSummary');
const $radioFrame = document.querySelector('.radioFrame');
let summary = 'invalid';
let arrayAccLocalStorage = [];
const $summaryContainer = document.querySelector('#summaryContainer');
const $filter = document.querySelector('.filter');
const $filterInput = document.querySelector('.filterInput');
const $filterBtn = document.querySelector('.filterBtn');
const form = document.querySelector('form');
const $priceText = document.querySelector('#priceText');
const $priceSlider = document.querySelector('#priceSlider');

//.................................................................
// Generator of pcBoxes that contain data of individual computers
const $pcContainer = document.querySelector('#pcContainer');

function createStructurePcBox(pc, container, array) {

  const divPcBox = document.createElement('div');
  const divPcImage = document.createElement('div');
  const divPcData = document.createElement('div');
  // divPcBox.setAttribute('data-description', JSON.stringify(pc)); // created and saved json string to data description with all informations about pc
  divPcBox.setAttribute('data-description', array.indexOf(pc));

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
  } //........

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

    if (container == $chosenPcContainer && desk == 'price') {
      continue;
    }

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

$filterInput.focus();
loadLocalStorage();

//......................................................
// Load data from localStorage
function loadLocalStorage() {
  let pay = localStorage.getItem('Pay')
  if (pay === 'leasing') {
    $leasing.checked = 1;
  }
  if (pay === 'cash') {
    $cash.checked = 1;
  }
  $fname.value = localStorage.getItem('FirstAndLastName');

  let saveDate = localStorage.getItem('Date', $secondOption.innerText);
  if (date2week() === saveDate) {
    $deliverDateSelect.selectedIndex = 1;
  }
  return
};

function switchScreen() {
  $filter.classList.toggle('hidden');
  $pcContainer.classList.toggle('hidden');
  $formContainer.classList.toggle('hidden');
};

function checkPcBox(event) {
  let clickedElement = event.target;
  while (clickedElement !== $pcContainer) {
    if (clickedElement.classList.contains('pcBox')) {
      switchScreen();
      const chosenPc = createChosenPc(clickedElement)
      addToSum(chosenPc['price']);
      return;
    }
    clickedElement = clickedElement.parentNode;
  }
}

function createChosenPc(clickedElement) {
  removeAllChild($chosenPcContainer);
  localStorage.setItem('chosenPC', JSON.stringify(computers[clickedElement.dataset.description]));
  // const chosenPc = JSON.parse(clickedElement.getAttribute('data-description')); // read before created json string  with all informations about pc
  const chosenPc = computers[clickedElement.dataset.description];
  createStructurePcBox(chosenPc, $chosenPcContainer, computers);
  return chosenPc;
}

function removeAllChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  };
};

function addToSum(...add) {
  sum = sum + add.reduce((total, current) => total + current, 0);
  $sum.innerText = sum.toFixed(2);;
  localStorage.setItem('summarySum', sum);
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
        addToSum(-accessories[clickedElement.dataset.description]['price']); // addToSum(-JSON.parse(clickedElement.getAttribute('data-description'))['price']);
        arrayAccLocalStorage = arrayAccLocalStorage.filter(element => {
          return element != JSON.stringify(accessories[clickedElement.dataset.description]);
        })
        localStorage.setItem('chosenAcc', arrayAccLocalStorage);
      } else {
        clickedElement.classList.add('addedAcc');
        addToSum(accessories[clickedElement.dataset.description]['price']); // addToSum(JSON.parse(clickedElement.getAttribute('data-description'))['price']);
        arrayAccLocalStorage.push(JSON.stringify(accessories[clickedElement.dataset.description]));

        localStorage.setItem('chosenAcc', arrayAccLocalStorage);
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
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }
}

function date2week() {
  const todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + 14);
  const day = todayDate.getDate();
  const month = (todayDate.getMonth() + 1).toString().padStart(2, '0');
  const year = todayDate.getFullYear();
  $secondOption.innerText = day + '-' + month + '-' + year;
  return $secondOption.innerText;
}

function checkDate() {
  if ($deliverDateSelect.selectedIndex !== 1) {
    $deliverDateSelect.classList.add('invalid');
    $deliverDateSelect.classList.remove('valid');
  } else {
    $deliverDateSelect.classList.add('valid');
    $deliverDateSelect.classList.remove('invalid');
  }
}

function checkPayment() {
  if ($leasing.checked || $cash.checked) {
    $radioFrame.classList.add('valid');
    $radioFrame.classList.remove('invalid');
  } else {
    $radioFrame.classList.add('invalid');
    $radioFrame.classList.remove('valid');
  }
}

function validSummary() {
  if (($leasing.checked || $cash.checked) && $fname.classList.contains('valid') && $deliverDateSelect.classList.contains('valid')) {
    summary = 'valid';
  } else {
    summary = 'invalid';
  }
  openSummary();
}

function resetChosenAccLocalStorage() {
  arrayAccLocalStorage = [];
  localStorage.setItem('chosenAcc', arrayAccLocalStorage);
}

function repairName2(nameString) {
  return nameString = nameString.replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function clearStorage() {
  localStorage.removeItem('chosenAcc');
  localStorage.removeItem('FirstAndLastName');
  localStorage.removeItem('Date');
  localStorage.removeItem('summarySum');
  localStorage.removeItem('Pay');
  localStorage.removeItem('chosenPC');
}

function openSummary() {
  if (summary === 'valid') {
    $formContainer.classList.add('hidden');
    $summaryContainer.classList.remove('hidden');

    const divSum = document.createElement('div');
    const h2Sum = document.createElement('h2');
    const pName = document.createElement('p');
    const pDate = document.createElement('p');
    const pPay = document.createElement('p');
    const pSum = document.createElement('p');
    const addedAccText = document.createElement('p');

    divSum.classList.add('divSum');
    addedAccText.classList.add('addedAccText');

    const firstAndLastName = localStorage.getItem('FirstAndLastName');
    h2Sum.innerText = 'Thank you for purchasing!'
    pName.innerText = 'First and Last Name: ' + repairName2(firstAndLastName);
    pDate.innerText = 'Delivery date: ' + localStorage.getItem('Date');
    pPay.innerText = 'Pay: ' + localStorage.getItem('Pay').slice(0, 1).toUpperCase() + localStorage.getItem('Pay').slice(1);
    pSum.innerText = 'Amount: ' + parseInt(localStorage.getItem('summarySum')).toFixed(2) + ' PLN';
    addedAccText.innerText = 'Added Accessories:'
    divSum.appendChild(h2Sum);
    divSum.appendChild(pName);
    divSum.appendChild(pDate);
    divSum.appendChild(pPay);
    divSum.appendChild(pSum);
    $summaryContainer.appendChild(divSum);

    const accArrayJson = localStorage.getItem('chosenAcc');
    const chosenAccessories = JSON.parse(`[${accArrayJson}]`);
    if (accArrayJson != '') {
      divSum.appendChild(addedAccText);
    }

    for (let acc of chosenAccessories) {
      const divAcc = document.createElement('div');
      const accImage = document.createElement('img');
      const pAcc = document.createElement('p');

      divAcc.classList.add('accDivSummary');
      accImage.classList.add('accImgSummary');
      pAcc.classList.add('accPSummary');
      accImage.src = acc['image'];
      pAcc.innerText = acc['accessory'];
      divAcc.appendChild(accImage);
      divAcc.appendChild(pAcc);
      divSum.appendChild(divAcc);
    }
    const divBtn = document.createElement('div');
    const btn = document.createElement('button');
    btn.classList.add('btn');
    divBtn.classList.add('divBtn');
    btn.innerText = 'Main Page';
    divBtn.appendChild(btn);
    $summaryContainer.insertAdjacentElement('afterend',divBtn);
    btn.addEventListener('click', function () {
      location.reload();
    });

    clearStorage();
  }
}

function filterPC(array) {
  const keywords = $filterInput.value.toLowerCase().replace(/\s+/g, ' ')
    .trim()
    .split(' ');

  const computersWithAllKeywords = array.filter(computer => {
    return keywords.every(keyword => {
      return Object.values(computer).some(value => {
        if (typeof value === 'string' && computer['price'] <= $priceSlider.value) {
          return value.toLowerCase().includes(keyword);
        } else {
          return false;
        }
      });
    });
  });

  if (computersWithAllKeywords.length === 0) {
    $pcContainer.innerText = 'Sorry, we didn\'t find any computers';
  }
  return computersWithAllKeywords;
}

function clear$pcContainer() {
  if ($pcContainer) {
    while ($pcContainer.firstChild) {
      $pcContainer.removeChild($pcContainer.firstChild)
    }
  }
}

//......................................................
// AddEventListeners

$fname.addEventListener('change', () => {
  validate($fname, patterns['firstAndLast']);
  localStorage.setItem('FirstAndLastName', $fname.value);
})

$pcContainer.addEventListener('click', (e) => {
  checkPcBox(e);
  resetChosenAccLocalStorage();
  $fname.focus();
});

$backToPcBtn.addEventListener('click', () => {
  switchScreen();
  resetAddAcc();
  resetSum();
  $filterInput.focus()
});
$accContainer.addEventListener('click', addAcc);

$deliverDateSelect.addEventListener('click', () => {
  date2week();
});
$deliverDateSelect.addEventListener('change', () => {
  checkDate();
  localStorage.setItem('Date', $secondOption.innerText);
});

$leasing.addEventListener('change', () => {
  checkPayment();
  localStorage.setItem('Pay', 'leasing');
});
$cash.addEventListener('change', () => {
  checkPayment();
  localStorage.setItem('Pay', 'cash');
});

$goToSummaryBtn.addEventListener('click', () => {
  checkDate();
  checkPayment();
  validate($fname, patterns['firstAndLast']);
  validSummary();
});

$filterBtn.addEventListener('click', () => {
  clear$pcContainer();
  createPcBox(filterPC(computers), $pcContainer);
});

form.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    if (!$pcContainer.classList.contains('hidden')) {
      $filterBtn.click();
      $filterBtn.blur();
      $filterInput.focus()
    }
    if (!$formContainer.classList.contains('hidden')) {
      $goToSummaryBtn.click();
      $goToSummaryBtn.blur();
    }
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (!$formContainer.classList.contains('hidden')) {
      $backToPcBtn.click();
    }
    if (!$summaryContainer.classList.contains('hidden')) {
      $startBtn = document.querySelector('.btn')
      $startBtn.click();
    }
  }
});

$priceSlider.addEventListener('change', (e) => {
  $priceText.innerText = e.target.value;
});
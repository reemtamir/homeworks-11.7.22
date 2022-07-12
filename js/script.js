'use strict';

const elDiv1 = document.createElement('div');
document.body.appendChild(elDiv1);
elDiv1.classList.add('round');

const elDiv2 = document.createElement('div');
document.body.appendChild(elDiv2);
const elUl = document.createElement('ul');
elUl.classList.add('list-unstyled');
elDiv2.appendChild(elUl);

addDetails("Re'em");
addDetails('Tamir');
addDetails('A programmer');
addDetails('050-7234598');

function addDetails(detail) {
  let elLi = document.createElement('li');
  elLi.innerHTML = detail;
  elUl.appendChild(elLi);
  elLi.classList.add('text-danger', 'display-3');
}

const car = {
  title: 'FORD',
  price: 200_000,
  hand: 2,
  km: 100_403,
  year: 2014,
};
const elCard = document.createElement('div');
document.body.appendChild(elCard);
elCard.classList.add('m-auto', 'card');
elCard.style.width = '18rem';
elCard.innerHTML = ` <div class="card-body">
<h5 class="card-title">Card title</h5>
<img src="img/ford.webp" class="card-img-top" alt="ford-car" />
<h4 class="price"></h4>
<h4 class="hand"></h4>
<h4 class="km"></h4>
<h4 class="year"></h4>

<a href="https://www.ford.co.il/" class="card-link" target="_blank"
  >לרכישה</a
>`;

document.querySelector('.card-title').innerHTML = car.title;
document.querySelector('.price').innerHTML = 'מחיר: ' + car.price + ' ש"ח';
document.querySelector('.hand').innerHTML = 'יד: ' + car.hand;
document.querySelector('.km').innerHTML = 'קמ: ' + car.km;
document.querySelector('.year').innerHTML = 'שנה: ' + car.year;

const elDiv3 = document.createElement('div');
document.body.appendChild(elDiv3);
elDiv3.classList.add(
  'bg-danger',
  'mt-3',
  'm-auto',
  'row',
  'align-items-center',
  'justify-content-center'
);
elDiv3.style.height = '200px';
elDiv3.style.width = '200px';
elDiv3.innerHTML = 'I was injected into this div by js😊 ';

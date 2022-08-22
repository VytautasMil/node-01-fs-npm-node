'use strict';

const casual = require('casual');

const sent1 = casual.sentence;

console.log('sent1 ===', sent1);

const city1 = casual.city;

console.log('city1 ===', city1);

// parasyti funkcija kuri grazina ir atspausdina random varda ir pavarde is casual
function printRandomName() {
  const randNameSurname = `${casual.first_name} ${casual.last_name}`;
  console.log(randNameSurname);
  return randNameSurname;
}
printRandomName();

// parasyti funkcija kuri grazina argumentu paduota skaiciu sugeneruotu mokejimo korteliu
// makeMeCards(4)
function makeMeCards(howMany) {
  const cards = [];
  for (let i = 0; i < howMany; i++) {
    cards.push(casual.card_data);
  }
  return cards;
}
console.log('makeMeCards(4) ===', makeMeCards(4));

// parasyti funkcija kuri sugeneruoja random data metai, menuo, diena. atspausdina ir grazina
// panaudoti sita funckija ir gauti random data app.js
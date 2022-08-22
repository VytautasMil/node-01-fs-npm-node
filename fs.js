'use strict';
console.log('fs.js');

const fs = require('fs');

// irasyti i failu sistema
// fs.writeFile('failo pavadinimas su keliu', 'duomenys i faila', callback funkcija su klaidos objektu)
fs.writeFile('./user.txt', 'Username=James', (err) => {
  if (err) {
    // ivyko klaida
    console.log(err);
    return;
  }
  console.log('failas sukurtas sekmingai');
});
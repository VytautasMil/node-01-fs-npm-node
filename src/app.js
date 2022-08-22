'use strict';
// es6 module syntax
// import { hoursToMin } from './helper';
// commonJs inmport/export
const { hoursToMin, yearsToDays } = require('./modules/helper');
const sum = require('./modules/sum');
console.log('app.js');

const name = 'James';

const fullName = `${name} Bond`;

console.log('fullName ===', fullName);

// paversti 12 valandu i minutes app.js

console.log(hoursToMin(12));
console.log(yearsToDays(70));
console.log(sum(70, 30));
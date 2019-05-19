console.log('[Testing] Observable: 0-equality');

let Rx1 = require('rxjs');
let Rx2 = require('rxjs').Rx;
let Rx3 = require('rxjs/Rx');

console.log('Rx1 === Rx2', Rx1 === Rx2); // false
console.log('Rx1 === Rx3', Rx1 === Rx3); // true
console.log('Rx2 === Rx3', Rx2 === Rx3); // false

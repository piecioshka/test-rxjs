console.log('[Testing] Subject: 2-operator-as-observable');

let Rx = require('rxjs');
let S = Rx.Subject;

let subject$ = new S;
let observable$ = subject$.asObservable();

console.log('subject$ is Observable', subject$ instanceof Rx.Observable);
console.log('subject$ is Subject', subject$ instanceof Rx.Subject);

console.log('observable$ is Observable', observable$ instanceof Rx.Observable);
console.log('observable$ is Subject', observable$ instanceof Rx.Subject);

console.log('\nSummary:');
console.log('  Subject is child of Observable');

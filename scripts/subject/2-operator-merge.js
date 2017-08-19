console.log('[Testing] Subject: 2-operator-merge');

let Rx = require('rxjs');
let S = Rx.Subject;

let subject = new S();

subject.subscribe((...args) => {
    console.log('ok', ...args);
}, (...args) => {
    console.log('err', ...args);
}, (...args) => {
    console.log('complete', ...args);
});

subject.next('q');

Rx.Observable.merge(
    Rx.Observable.fromEvent(document, 'click'),
    subject.asObservable(),
    subject
).subscribe(function (...args) {
    console.log(...args);
});

subject.next('w');

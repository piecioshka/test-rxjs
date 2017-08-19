console.log('[Testing] Subject: 1');

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

subject.next(1);

subject.complete();

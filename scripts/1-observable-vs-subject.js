console.log('[Testing] Observable: 1-observable-vs-subject');

let Rx = require('rxjs');
let S = Rx.Subject;
let O = Rx.Observable;

let clockObservable = new O(observer => {
    console.log('[observable] next');
    observer.next(Math.random());
});

clockObservable.subscribe(data => {
    console.log('[observable] subscriber no. 1', data);
});
clockObservable.subscribe(data => {
    console.log('[observable] subscriber no. 2', data);
});


let clockSubject = new S();

clockSubject.subscribe(data => {
    console.log('    [subject] subscriber no. 1', data);
});
clockSubject.subscribe(data => {
    console.log('    [subject] subscriber no. 2', data);
});

console.log('    [subject] next');
clockSubject.next(Math.random());

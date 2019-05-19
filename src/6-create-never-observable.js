console.log('[Testing] Observable: 6-create-never-observable');

let Rx = require('rxjs');

let publisher = Rx.Observable.never(); // NeverObservable

console.log('publisher', publisher);

publisher = publisher.startWith(123);
publisher = publisher.merge(publisher);

publisher.subscribe((...args) => {
    console.log(...args);
});

console.log('[Testing] Observable: 2-cold-and-hot');

let Rx = require('rxjs');
let O = Rx.Observable;

let clock2$ = O.create(observer => {
    setTimeout(() => {
        observer.next(1);
    }, 1000);
    setTimeout(() => {
        observer.next(2);
    }, 2000);
    setTimeout(() => {
        observer.next(3);
    }, 3000);
});

let published = clock2$.publish();

clock2$.subscribe((...args) => {
    console.log('clock2$', ...args);
});

published.subscribe((...args) => {
    console.log('published ***', ...args);
});

setTimeout(function () {
    published.subscribe((...args) => {
        console.log('published ===', ...args);
    });
}, 1500);

published.connect();

console.log('[Testing] Observable: 1');

let Rx = require('rxjs');
let O = Rx.Observable;

let clock$ = new O(observer => {
    let interval = setInterval(() => {
        console.log('run run run');
        observer.next(new Date());
        // observer.unsubscribe();
        // observer.complete();
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        observer.error(1);
    }, 3001);
});

clock$.subscribe(data => {
    console.log(data);
});

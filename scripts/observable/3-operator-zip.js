console.log('[Testing] Observable: 3-operator-zip');

let Rx = require('rxjs');
let O = Rx.Observable;

let foo$ = O.of(1, 2, 3, 4);

foo$ = O.zip(
    foo$,
    foo$,
    foo$
);

foo$.subscribe(d => {
    console.log(d);
});

console.log('[Testing] Observable: 4-import-only-used-modules');

let O = require('rxjs/Observable');
O.of = require('rxjs/observable/of').of;
O.zip = require('rxjs/observable/zip').zip;

let foo$ = O.of(1, 2, 3, 4);

foo$ = O.zip(
    foo$,
    foo$,
    foo$
);

foo$.subscribe(d => {
    console.log(d);
});

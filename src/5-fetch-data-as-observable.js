console.log('[Testing] Observable: 5-fetch-data-as-observable');

// let Rx = require('rxjs');

Rx.Observable.of();      // EmptyObservable;
Rx.Observable.create();  // Observable

const URL = '//jsonplaceholder.typicode.com/posts';

function request(url, observer) {
    fetch(url)
        .then(res => res.json())
        .then(res => observer.next(res))
        .catch(err => observer.error(err))
        .then(() => observer.complete());
}

Rx.Observable
    .create(obs => request(URL, obs))
    .subscribe(
        console.log.bind(console, 'success'),
        console.log.bind(console, 'error'),
        console.log.bind(console, 'complete')
    );

// -----------------------------------------------------------------------------

Rx.Observable
    .from(fetch(URL))
    .flatMap((res) => Rx.Observable.from(res.json()))
    .subscribe((fetchRes) => {
        console.log('fetch sub', fetchRes);
    });

console.log('[Testing] Observable: 7-operator-share');

let Rx = require('rxjs');

let observable = Rx.Observable.create((observer) => {
    observer.next(Math.random());
});

console.log('observable', observable);

function getRandom(stream) {
    stream.subscribe((...args) => {
        console.log('inside function', ...args);
    });
}

getRandom(observable);
getRandom(observable);

// -----------------------------------------------------------------------------

let publish = observable.share();

console.log('publish', publish);

getRandom(publish);
getRandom(publish);

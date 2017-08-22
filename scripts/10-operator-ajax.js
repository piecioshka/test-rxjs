console.log('[Testing] Subject: 10-operator-ajax');

// let Rx = require('rxjs');

function request(url) {
    return Rx.Observable
        .ajax({ url })
        .map(evt => evt.response);
}

request('/@json/50.json').subscribe((...data) => {
    console.log(...data);
});

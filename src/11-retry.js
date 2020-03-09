console.log('[Testing] Observable: 11-retry');

const RETRY_NUMBER = 2;

function sendRequest(url) {
    console.log('sendRequest', url);

    return Rx.Observable.ajax(url)
        .timeout(100)
        .retryWhen((error$) => {
            console.log('sendRequest (retry)');
            let errorCount = 0;
            return error$
                .do((err) => {
                    console.log('errorCount', errorCount);

                    if (errorCount === RETRY_NUMBER) {
                        throw err;
                    }

                    errorCount++;
                })
                .delay(2000)
        });
}

sendRequest('./?block')
    .subscribe({
        next: (r) => {
            console.log('SUCCESS', r);
        },
        error: (e) => {
            console.log('ERROR', e);
        },
        completE: (...args) => {
            console.log('FINALLY', ...args);
        }
    });

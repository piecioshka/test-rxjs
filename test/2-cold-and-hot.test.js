const { cold, hot } = require('jasmine-marbles');

const item = {
    foo: 'bar'
};

it('should be a cold hot', () => {
    hot('x-x-x', item);
});

// https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/testing/marble-testing.md

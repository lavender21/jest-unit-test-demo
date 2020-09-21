const { sum } = require("./function-test-demo");

describe('sum', () => {
    it('a + b', () => {
        expect(sum(1, 2)).toEqual(3)
    });
});

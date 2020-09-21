import { sum } from './function-test-demo';

describe('sum', () => {
    it('a + b', () => {
        expect(sum(1,3)).toEqual(4);
    });
});
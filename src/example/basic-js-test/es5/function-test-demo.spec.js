const sum = (a, b) => {
    return a + b;
}
describe('sum', () => {
    it('a + b', () => {
        expect(sum(1, 2)).toEqual(3)
    });
});

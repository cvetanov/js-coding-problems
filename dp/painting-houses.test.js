const { calculate } = require('./painting-houses');

const test1 = [
    [1, 3, 1, 2, 3],
    [2, 1, 1, 2, 3],
    [5, 2, 4, 2, 1],
    [2, 3, 4, 4, 2],
    [3, 1, 2, 5, 1],
    [1, 2, 1, 1, 1],
];

const test2 = [
    [1, 2, 3],
    [7, 3, 4],
    [3, 3, 4],
    [5, 1, 3],
];

describe('minimal cost of building n houses with k colors test with no repeating colors', () => {
    it('should return 7 for "test1"', () => {
        expect(calculate(test1)).toEqual(7);
    });

    it('should return 8 for "test2"', () => {
        expect(calculate(test2)).toEqual(8);
    });
})
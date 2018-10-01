const { intersection } = require('./intersecting-lists');

describe('are two lists intersecting', () => {
    it('should return 6 for [1, 3, 5, 6, 7] and [2, 4, 6, 7]', () => {
        expect(intersection([1, 3, 5, 6, 7],    [2, 4, 6, 7])).toEqual(6);
    });

    it('should return 4 for [4, 5, 6] and [1, 2, 3, 4, 5, 6]', () => {
        expect(intersection([4, 5, 6],    [1, 2, 3, 4, 5, 6])).toEqual(4);
    });

    it('should return 4 for [3, 7, 8, 10] and [99, 1, 8, 10]', () => {
        expect(intersection([3, 7, 8, 10],    [99, 1, 8, 10])).toEqual(8);
    });
    
    it('should return -1 for [1, 3, 5, 7, 9] and [2, 4, 6, 8]', () => {
        expect(intersection([1, 3, 5, 7, 9],     [2, 4, 6, 8])).toEqual(-1);
    });
})
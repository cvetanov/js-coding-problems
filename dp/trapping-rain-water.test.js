const { calculate } = require('./trapping-rain-water');

describe('trapping rain water tests', () => {
    it('should return 1 for [2, 1, 2]', () => {
        expect(calculate([2, 1, 2])).toEqual(1);
    });

    it('should return 8 for [3, 0, 1, 3, 0, 5]', () => {
        expect(calculate([3, 0, 1, 3, 0, 5])).toEqual(8);
    });

    it('should return 4 for [3, 0, 1, 2, 0, 1]', () => {
        expect(calculate([3, 0, 1, 2, 0, 1])).toEqual(4);
    });

    it('should return 7 for [2, 1, 1, 0, 1, 0, 3]', () => {
        expect(calculate([2, 1, 1, 0, 1, 0, 3])).toEqual(7);
    });
})


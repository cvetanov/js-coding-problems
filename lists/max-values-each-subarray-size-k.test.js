const { findMaxValuesForSubarraysSizeK } = require('./max-values-each-subarray-size-k');

describe('find max values of each subarray with size k', () => {
    it('should return [10, 9, 9, 9, 8, 8] for [10, 5, 2, 9, 8, 7, 1, 8] and k = 3', () => {
        expect(findMaxValuesForSubarraysSizeK([10, 5, 2, 9, 8, 7, 1, 8], 3)).toEqual([10, 9, 9, 9, 8, 8]);
    });

    it('should return [10, 9, 9, 9, 8] for [10, 5, 2, 9, 8, 7, 1, 8] and k = 4', () => {
        expect(findMaxValuesForSubarraysSizeK([10, 5, 2, 9, 8, 7, 1, 8], 4)).toEqual([10, 9, 9, 9, 8]);
    });

    it('should return [10, 7, 8] for [10, 5, 2, 7, 8, 7] and k = 3', () => {
        expect(findMaxValuesForSubarraysSizeK([10, 5, 2, 7, 8, 7], 3)).toEqual([10, 7, 8, 8]);
    });

    it('should return [10, 5, 7, 8, 8] for [10, 5, 2, 7, 8, 7] and k = 2', () => {
        expect(findMaxValuesForSubarraysSizeK([10, 5, 2, 7, 8, 7], 2)).toEqual([10, 5, 7, 8, 8]);
    });
})
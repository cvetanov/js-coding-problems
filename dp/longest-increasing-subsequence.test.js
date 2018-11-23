const { longestIncreasingSubsequenceLength } = require('./longest-increasing-subsequence');

describe('longest increasing subsequence tests', () => {
    it('should return 6 for [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]', () => {
        // 0, 2, 6, 9, 11, 15
        expect(longestIncreasingSubsequenceLength([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])).toEqual(6);
    });

    it('should return 5 for [0, 8, 4, 12, 2, 3, 6, 14, 7]', () => {
        // 0, 2, 3, 6, 7
        expect(longestIncreasingSubsequenceLength([0, 8, 4, 12, 2, 3, 6, 14, 7])).toEqual(5);
    });

    it('should return 4 for [0, 1, 2, 1, 2, 3]', () => {
        // 0, 1, 2, 3
        expect(longestIncreasingSubsequenceLength([0, 1, 2, 1, 2, 3])).toEqual(4);
    });

    it('should return 1 for [5, 4, 3, 2, 1]', () => {
        expect(longestIncreasingSubsequenceLength([5, 4, 3, 2, 1])).toEqual(1);
    });

    it('should return 4 for [1, 2, 3, 4]', () => {
        // 1, 2, 3, 4
        expect(longestIncreasingSubsequenceLength([1, 2, 3, 4])).toEqual(4);
    });

    it('should return 6 for [10, 22, 9, 33, 21, 50, 41, 60, 80]', () => {
        // 10, 22, 33, 50, 60, 80
        expect(longestIncreasingSubsequenceLength([10, 22, 9, 33, 21, 50, 41, 60, 80])).toEqual(6);
    });
});
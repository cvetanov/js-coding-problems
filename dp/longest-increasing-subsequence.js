/*
Given an array of numbers, find the length of the longest increasing subsequence in the array.
The subsequence does not necessarily have to be contiguous.

For example, given the array [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15],
the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.
*/

const longestIncreasingSubsequenceLength = arr => {
    const n = arr.length;
    const lis = [...Array(n)].map(i => 1);
    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (arr[i] > arr[j]) {
                lis[i] = Math.max(lis[i], lis[j] + 1);
            }
        }
    }

    return lis[n - 1];
}

module.exports = {
    longestIncreasingSubsequenceLength,
};

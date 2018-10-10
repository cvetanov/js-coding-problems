/*
The edit distance between two strings refers to the minimum number of character insertions,
deletions, and substitutions required to change one string to the other.

For example, the edit distance between “kitten” and “sitting” is three:
substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.

Given two strings, compute the edit distance between them
*/

const calculateEditDistance = (a, b) => {
    const na = a.length, nb = b.length;
    
    // init matrix of zeros
    const dp = [...Array(na)].map(e => [...Array(nb)].map(i => 0));

    // element at start is 0 if starting charactes are same, 1 otherwise
    const initialValue = a.charAt(0) === b.charAt(0) ? 0 : 1;
    dp[0][0] = initialValue;

    // initialize first row to value from before and equality of first char of first string and ith char of second string
    for (let i = 1; i < nb; ++i) {
        const addend = a.charAt(0) === b.charAt(i) ? 0 : 1;
        dp[0][i] = dp[0][i - 1] + addend;
    }
    // initialize first column to value from before and equality of first char of second string and ith char of first string
    for (let i = 1; i < na; ++i) {
        const addend = a.charAt(i) === b.charAt(0) ? 0 : 1;
        dp[i][0] = dp[i - 1][0] + addend;
    }

    for (let i = 1; i < na; i++) {
        for (let j = 1; j < nb; j++) {
            const ai = a.charAt(i);
            const bj = b.charAt(j);
            const addend = ai === bj ? 0 : 1;

            // iterate through the matrix by taking the minimum distance up until ith row and jth column
            // + equality of ith char of first string and jth char of second string
            dp[i][j] = getMinimumDistancePrevious(dp, i, j) + addend;
        }
    }

    return dp[na - 1][nb - 1];
}

const getMinimumDistancePrevious = (dp, i, j) => {
    return Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]);
}

module.exports = {
    calculateEditDistance,
};

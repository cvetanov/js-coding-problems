/*

A builder is looking to build a row of N houses that can be of K different colors.
He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color,
return the minimum cost which achieves this goal.

*/

// used for reseting the previous min value
const getDefaultMin = () => ({ value: null, index: -1});

const calculate = matrix => {
    // init
    const n = matrix.length;
    const k = matrix[0].length;
    const dp = [...Array(n)].map(e => [...Array(k)].map(i => 0));
    let previousMin = getDefaultMin();
    let previousSecondMin = getDefaultMin();

    // fill in first row to be equal to matrix and save min and second min elements
    for (let j = 0; j < k; ++j) {
        const elem = matrix[0][j];
        if (elem < previousMin.value || previousMin.index === -1) {
            previousSecondMin = { ...previousMin };
            previousMin = {
                value: elem,
                index: j,
            };
        } else if (elem < previousSecondMin.value || previousSecondMin.index === -1) {
            previousSecondMin = {
                value: elem,
                index: j,
            };
        }
        dp[0][j] = matrix[0][j];
    }
    
    for (let i = 1; i < n; ++i) {
        
        let currentMin = getDefaultMin();
        let currentSecondMin = getDefaultMin();

        for (let j = 0; j < k; ++j) {
            const elem = matrix[i][j];

            // if the previous min cost is with the same color, get the second previous min
            // otherwise, get the previous min cost and add the cost for building the ith house with jth color
            const previousMinDifferentColor = j === previousMin.index ? previousSecondMin.value : previousMin.value;

            const elemAccumulated = elem + previousMinDifferentColor;
            dp[i][j] = elemAccumulated;

            // save the min and second min elements for next iteration
            if (elemAccumulated < currentMin.value || currentMin.index === -1) {
                currentSecondMin = { ...currentMin };
                currentMin = {
                    value: elemAccumulated,
                    index: j,
                };
            } else if (elemAccumulated < currentSecondMin.value || currentSecondMin.index === -1) {
                currentSecondMin = {
                    value: elemAccumulated,
                    index: j,
                };
            }
        }

        previousMin = { ...currentMin };
        previousSecondMin = { ...currentSecondMin };
    }

    return previousMin.value;
}

module.exports = {
    calculate,
};

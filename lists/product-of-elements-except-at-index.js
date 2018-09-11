/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

const test = [1, 2, 3, 4, 5];

/*
[1, 2, 3, 4, 5]
[120, 120, 120, 120, 120]



*/

// O(n)
const calculateFP = input => {
    const product = input.reduce((acc, curr) => acc * curr, 1);

    return input.map(element => product / element)
}

// O(n)
const calculateNoDivision = input => {
    const n = input.length;
    const leftToRight = new Array(n);
    const rightToLeft = new Array(n);
    leftToRight[0] = input[0];
    rightToLeft[n - 1] = input[n - 1];
    for (let i = 1; i < n; ++i) {
        leftToRight[i] = input[i] * leftToRight[i - 1];
        rightToLeft[n - i - 1] = input[n - i - 1] * rightToLeft[n - i];
    }

    const result = new Array(n);
    for (let i = 0; i < n; ++i) {
        const leftIndex = i - 1;
        const rightIndex = i + 1;
        const leftProduct = leftIndex < 0 ? 1 : leftToRight[leftIndex];
        const rightProduct = rightIndex === n ? 1 : rightToLeft[rightIndex];
        result[i] = leftProduct * rightProduct
    }

    return result;
}

console.log(calculateFP(test));
console.log(calculateNoDivision(test));

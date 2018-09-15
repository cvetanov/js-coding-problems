/*

Find the first positive integer missing from the list.

[1, 2, 0] => 3
[1, 1, -1, -4, 0, 3] => 2
[3, 4, -1, 1] => 2

Should run in O(n) time and use constant space (meaning no extra arrays, but you can modify the given one in place).

*/

const test1 = [3, 4, -1, 1];
const test2 = [0, 2, 1];
const test3 = [4, 1, 3, -1, 2, 6];
const test4 = [5, 1, 3, 0, 4];
const test5 = [1, 2, 3, 5, 4];
const test6 = [4, 1, 1, 2, 2, 6];

const find = arr => {
    const n = arr.length;

    // set negative elements and 0 to n + 1
    for (let i = 0; i < n; ++i) {
        if (arr[i] <= 0) {
            arr[i] = n + 1;
        }
    }

    // for every element, set arr[element - 1] to negative
    for (let i = 0; i < n; ++ i) {
        const elem = Math.abs(arr[i]);
        if (elem <= n) {
            if (arr[elem - 1] > 0) {
                arr[elem - 1] = -arr[elem - 1];
            }
        }
    }

    // return index of first positive element
    for (let i = 0; i < n; ++ i) {
        if (arr[i] > 0) {
            return i + 1;
        }
    }

    return arr.length + 1;
}


console.log(find(test1));
console.log(find(test2));
console.log(find(test3));
console.log(find(test4));
console.log(find(test5));
console.log(find(test6));

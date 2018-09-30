/*

Given an array of integers and a number k, where 1 <= k <= length of the array,
compute the maximum values of each subarray of length k.

For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

10 = max(10, 5, 2)
7 = max(5, 2, 7)
8 = max(2, 7, 8)
8 = max(7, 8, 7)

Do this in O(n) time and O(k) space.
You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

*/
const Dequeu = require('double-ended-queue');

const findMaxValuesForSubarraysSizeK = (arr, k) => {
    const n = arr.length;
    const deque = new Dequeu();
    let res = [];

    let i = 0;

    // process first k elements
    for (; i < k; ++i) {
        // if current element is larger than all previous ones,
        // remove them all since this one is further in the list and is bigger
        while (!deque.isEmpty() && arr[i] >= arr[deque.peekBack()]) {
            deque.pop();
        }
        // add current element to end
        deque.push(i);
    }

    for (; i < n; ++i) {

        // print element at start of queue
        res = [...res, arr[deque.peekFront()]];

        // if element at start of queue is out of range (more than k elements behind current iteration), remove it
        while (!deque.isEmpty() && deque.peekFront() <= i - k) {
            deque.shift();
        }

        // if current element is larger than all previous ones,
        // remove them all since this one is further in the list and is bigger
        while (!deque.isEmpty() && arr[i] >= arr[deque.peekBack()]) {
            deque.pop();
        }

        deque.push(i);
    }

    res = [...res, arr[deque.peekFront()]];
    return res;
}


module.exports = {
    findMaxValuesForSubarraysSizeK,
};

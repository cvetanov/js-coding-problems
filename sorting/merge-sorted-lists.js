/*
Return a new sorted merged list from K sorted lists, each with size N

For example, if we had [
    [10, 15, 30],
    [12, 15, 20],
    [17, 20, 32]
], the result should be [10, 12, 15, 15, 17, 20, 20, 30, 32].

*/

import Heap from 'heap';

const lists = [
    [10, 15, 30],
    [12, 15, 20],
    [17, 20, 32]
];

const merged = [];
const k = lists.length;

// min heap by value
const heap = new Heap((a, b) => a.value - b.value);

// add every first element in the heap
for (let i = 0; i < k; ++i) {
    heap.push({ listIndex: i, elemIndex: 0, value: lists[i][0] });
}

while (!heap.empty()) {
    const smallest = heap.pop();
    const { listIndex, elemIndex, value } = smallest;
    
    // add the smallest to the result list
    merged.push(value);

    const nextElemIndex = elemIndex + 1;
    if (lists[listIndex].length !== nextElemIndex) {
        // take the next element of the list from which we added to the result list
        heap.push({ listIndex, elemIndex: nextElemIndex, value: lists[listIndex][nextElemIndex]})
    }
}

console.log(merged);

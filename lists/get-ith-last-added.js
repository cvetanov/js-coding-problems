/*

You run an e-commerce site and want to record the last N order ids in a log.

API:
- record(id) - adds an order id to the data structure
- getLast(i) - gets the ith last added order id (i <= N)

*/

const arr = [];
const record = (id) => arr.push(id);
const getLast = (i) => arr[arr.length - i];

record(1);
record(4);
record(3);
record(7);
record(12);
record(8);

console.log(arr);

console.log(getLast(3));
console.log(getLast(2));
console.log(getLast(1));

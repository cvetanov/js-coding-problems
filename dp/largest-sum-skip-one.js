/*
Find the largest sum inside an array (but you can only take numbers which are not next to each other).
Example: [2, 1, 4, 6, 3] -> 2 + 4 + 3 = 9
Example: [5, 1, 1, 5] -> 5 + 5 = 10
*/

const test = [5, 1, 1, 5];

const n = test.length;
let dyn = new Array(n);

dyn[0] = test[0];
dyn[1] = test[1];

for (let i = 2; i < n; ++i) {
  const curr = Math.max(test[i] + dyn[i-2], dyn[i-1]);
  dyn[i] = curr;
  
  const prev = Math.max(dyn[i-1], dyn[i-2]);
  dyn[i-1] = prev;
}

console.log(dyn[n - 1]);
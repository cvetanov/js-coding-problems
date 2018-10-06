/*

Given a singly linked list and an integer k, remove the kth last element from the list.
k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.
*/

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

const node5 = new Node(9, null);
const node4 = new Node(4, node5);
const node3 = new Node(2, node4);
const node2 = new Node(8, node3);
const node1 = new Node(3, node2);
// [3, 8, 2, 4, 9]

/**
 * Returns the kth last element in O(n) time and constant space with a single iteration.
 * 
 * Init first pointer and go to next node until we have passed k nodes.
 * Init second pointer at start when we reach k nodes in the above mentioned iteration.
 * While first pointer does not reach the end, move both pointers to their next node.
 * At the end, the first pointer will point at the end of the list
 * and the second pointer will point to the k-th element from the back of the list
 * 
 * @param list pointer to the singly linked list.
 * @param k which element from the end to return;
 */
const getKthLast = (list, k) => {
    let i = 1;
    let pointer1 = list;
    while (i !== k) {
        pointer1 = pointer1.next;
        i++;
    }
    let pointer2 = list;
    while (pointer1.next) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer2.value;
}

console.log(getKthLast(node1, 1) === 9 ? 'success' : 'failure');
console.log(getKthLast(node1, 2) === 4 ? 'success' : 'failure');
console.log(getKthLast(node1, 3) === 2 ? 'success' : 'failure');
console.log(getKthLast(node1, 4) === 8 ? 'success' : 'failure');
console.log(getKthLast(node1, 5) === 3 ? 'success' : 'failure');

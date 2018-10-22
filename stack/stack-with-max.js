/*
Implement a stack that has the following methods:

push(val), which pushes an element onto the stack
pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.

Each method should run in constant time.

*/

// we will be using a third party stack data structure implementation to make our "max stack"
const stackFn = require('@datastructures-js/stack');

class StackMax {
    constructor() {
        // keep one stack for elements as a regular stack
        this.stack = stackFn();
        // keep one stack for max element which will be the same size as the one keeping the elements
        this.stackMax = stackFn();
    }

    push(e) {
        // add to regular stack
        this.stack.push(e);
        // add the Math.max from the max element from the previous stack of max elements and the element being added
        this.stackMax.push(Math.max(e, this.stackMax.peek()));
    }

    pop() {
        // remove from both stack of max elements and regular stack of elements
        this.stackMax.pop();
        return this.stack.pop();
    }

    max() {
        // return element on top of the stack which holds the max elements
        return this.stackMax.peek();
    }
}

module.exports = {
    StackMax,
};

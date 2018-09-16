/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

const doTwoElementsAddUpToK = (list, k) => {

    const n = list.length;
    const map = {};

    for (let i = 0; i < n; ++i) {
        const elem = list[i];
        if (map[elem]) {
            return true;
        }
        
        const addend = k - elem;
        map[addend] = true;
    }
    return false;
}

module.exports = doTwoElementsAddUpToK;

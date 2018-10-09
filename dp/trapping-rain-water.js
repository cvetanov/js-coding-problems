/*

You are given an array of non-negative integers that represents a two-dimensional elevation map
where each element is unit-width wall and the integer is the height.
Suppose it will rain and all spots between two walls get filled up.

Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

Given the input [3, 0, 1, 3, 0, 5],
we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index
(we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.

*/

const calculate = elevation => {
    const leftBoundaries = getLeftBoundaries(elevation);

    // need to spread the array because reverse is an in-place operation
    const rightBoundaries = getLeftBoundaries([...elevation].reverse()).reverse();

    return elevation.reduce(
        (acc, curr, index) => {
            const lowestBoundary = Math.min(leftBoundaries[index], rightBoundaries[index]);
            return acc + (lowestBoundary - curr);
        },
        0
    );
};

const getLeftBoundaries = list => {
    // array of non-negative integers, meaning we can init max to -1
    let max = -1;
    return list.map(elem => {
        max = Math.max(elem, max);
        return max;
    });
};

module.exports = {
    calculate,
};

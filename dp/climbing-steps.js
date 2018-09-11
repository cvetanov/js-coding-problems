/*
There exists a staircase with N steps.
You can either climb 1 or 2 steps at a given time.
Given N, write a function that returns the number of unique ways you can climb the staircase.

Example:
N = 4; Answer = 5
[1, 1, 1, 1]
[1, 1, 2]
[1, 2, 1]
[2, 1, 1]
[2, 2]

What if, instead of being able to climb 1 and 2 steps, you could climb any number of steps from a set of positive integers X?
For example, X = {1, 3, 5}, meaning you can climb 1, 3 or 5 steps at a time.

*/

const N = 6;
const steps = [1, 3, 5];

const findUniqueWaysToClimb = (steps, N) => {
    const waysToClimb = new Array(N + 1);
    for (let i = 0; i <= N; ++i) {
        waysToClimb[i] = 0;
    }

    // initialize waysToClimb to 1 for each step size
    steps.forEach(step => waysToClimb[step] = 1);

    for (let i = 1; i <= N; ++i) {

        steps.forEach(step => {
            const previousStep = i - step;

            if (previousStep > 0) {
                waysToClimb[i] = waysToClimb[i] + waysToClimb[previousStep];
            }
        });
    }

    return waysToClimb[N];
}

console.log(findUniqueWaysToClimb(steps, N));

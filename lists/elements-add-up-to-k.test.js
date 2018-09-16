const  doTwoElementsAddUpToK = require('./elements-add-up-to-k');


const test1 = [10, 15, 3, 7, 8, 12, 3, 5];
const k1 = 8;
const k2 = 21;

describe('do two elements add up to K', () => {
    describe(`for input array of [10, 15, 3, 7, 8, 12, 3, 5]`, () => {
        it(`returns true when K = 8`, () => {
            expect(doTwoElementsAddUpToK(test1, k1)).toBeTruthy();
        });

        it(`returns false when K = 21`, () => {
            expect(doTwoElementsAddUpToK(test1, k2)).toBeFalsy();
        });
    })
})

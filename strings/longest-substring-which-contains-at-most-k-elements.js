/*
Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.
For example, given s = "abcba" and k = 2, the longest substring is "bcb", length 3.
*/

const test = "abdcbaaaaacadba";
const K = 3;

const findLongestSubstringWhichContainsAtMostKDistinctCharacters = (string, k) => {
    const n = string.length;
    let max = 0;

    let start = 0;
    const map = {};
    // due to Object.keys(map).length being O(n)
    let mapSize = 0;

    for (let i = 0; i < n; ++i) {
        const char = string[i];
        if (map[char]) {
            map[char] = map[char] + 1;
        } else {
            map[char] = 1;
            mapSize++;
        }

        // if more than k characters are in the map
        // remove all repetitive occurences of the first char
        while (mapSize > k) {
            max = Math.max(max, i - start);
            const firstChar = string[start];
            if (map[firstChar] == 1) {
                delete map[firstChar];
                mapSize--;
            } else {
                map[firstChar] = map[firstChar] - 1;
            }
            start++;
        }
    }

    max = Math.max(max, n - start);

    return max;
}

console.log(findLongestSubstringWhichContainsAtMostKDistinctCharacters(test, K));


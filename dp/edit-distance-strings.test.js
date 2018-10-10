const { calculateEditDistance } = require('./edit-distance-strings');

describe('edit distance between strings tests', () => {
    it('should return 2 for "minimum" and "maximum"', () => {
        expect(calculateEditDistance("minimum", "maximum")).toEqual(2);
    });

    it('should return 3 for "kitten" and "sitting"', () => {
        expect(calculateEditDistance("kitten", "sitting")).toEqual(3);
    });

    it('should return 2 for "abc" and "b"', () => {
        expect(calculateEditDistance("abc", "b")).toEqual(2);
    });

    it('should return 1 for "abcde" and "abde"', () => {
        expect(calculateEditDistance("abcde", "abde")).toEqual(1);
    });

    it('should return 1 for "car" and "far"', () => {
        expect(calculateEditDistance("car", "far")).toEqual(1);
    });

    it('should return 1 for "islander" and "slander"', () => {
        expect(calculateEditDistance("islander", "slander")).toEqual(1);
    });

    it('should return 3 for "mart" and "karma"', () => {
        expect(calculateEditDistance("mart", "karma")).toEqual(3);
    });

    it('should return 5 for "intention" and "execution"', () => {
        expect(calculateEditDistance("intention", "execution")).toEqual(5);
    });
})
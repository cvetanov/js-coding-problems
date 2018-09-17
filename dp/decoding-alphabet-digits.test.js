const { decode, valid } = require('./decoding-alphabet-digits');

describe('decoding alphabet digits tests', () => {
    it('should return 2 for "11"', () => {
        expect(decode("11")).toEqual(2);
    })
    it('should return 3 for "111"', () => {
        expect(decode("111")).toEqual(3);
    })
    it('should return 5 for "1111"', () => {
        expect(decode("1111")).toEqual(5);
    })
    it('should return 1 for "1010"', () => {
        expect(decode("1010")).toEqual(1);
    })
    it('should return 4 for "2626"', () => {
        expect(decode("2626")).toEqual(4);
    })
    it('should return 3 for "3125"', () => {
        expect(decode("3125")).toEqual(3);
    })
    it('should return 1 for "1205"', () => {
        expect(decode("1205")).toEqual(1);
    })
    
    it('should return valid for "2"', () => {
        expect(valid("2")).toBeTruthy();
    })
    it('should return invalid for "0"', () => {
        expect(valid("0")).toBeFalsy();
    })
    it('should return valid for "26"', () => {
        expect(valid("26")).toBeTruthy();
    })
    it('should return invalid for "27"', () => {
        expect(valid("27")).toBeFalsy();
    })
    it('should return invalid for "31"', () => {
        expect(valid("31")).toBeFalsy();
    })
})
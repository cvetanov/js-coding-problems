const { validate } = require('./validity-of-string-of-brackets');

describe('validity of string of brackets test', () => {
    it('should return true for "([])[]({})"', () => {
        expect(validate("([])[]({})")).toBeTruthy();
    });

    it('should return false for "((()"', () => {
        expect(validate("((()")).toBeFalsy();
    });

    it('should return false for "([)]"', () => {
        expect(validate("([)]")).toBeFalsy();
    });

    it('should return false for ")"', () => {
        expect(validate(")")).toBeFalsy();
    });
})

const { StackMax } = require('./stack-with-max');

describe('stack with max() tests', () => {
    it('should return max element v1', () => {
        const s = new StackMax();
        s.push(1);
        s.push(2);
        expect(s.max()).toEqual(2);
        s.push(0);
        expect(s.max()).toEqual(2);
        s.pop();
        s.pop();
        expect(s.max()).toEqual(1);
    });

    it('should return max element v2', () => {
        const s = new StackMax();
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);
        s.push(5);
        expect(s.max()).toEqual(5);
        s.push(0);
        expect(s.max()).toEqual(5);
        s.pop();
        expect(s.max()).toEqual(5);
        s.pop();
        expect(s.max()).toEqual(4);
        s.pop();
        expect(s.max()).toEqual(3);
        s.pop();
        expect(s.max()).toEqual(2);
        s.pop();
        expect(s.max()).toEqual(1);
    });
})

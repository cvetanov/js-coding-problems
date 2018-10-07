/*

Given a string of round, curly, and square open and closing brackets,
return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.

*/

const stackFn = require('@datastructures-js/stack');

const validate = brackets => {
    const stack = stackFn();

    const { length } = brackets;
    for (let i = 0; i < length; ++i) {
        const char = brackets.charAt(i);
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (
                (last === '(' && char === ')') ||
                (last === '[' && char === ']') ||
                (last === '{' && char === '}')
            ) {
                // do nothing, already popped from stack
            } else {
                return false;
            }
        }
    }

    return stack.isEmpty();
}

module.exports = {
    validate,
};

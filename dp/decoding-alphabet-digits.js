/*
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/

const decode = (message) => {
    const n = message.length;
    const dp = new Array(n);
    for (let i = 0; i < n; ++ i) {
        dp[i] = 0;
    }

    dp[0] = 1;
    dp[1] = valid(message[1])
        ? valid(`${message[0]}${message[1]}`)
            ? 2
            : 1
        : 1;

    for (let i = 2; i < n; ++i) {
        const current = message[i];
        const previous = message[i - 1];
        if (valid(current)) {
            if (valid(`${previous}${current}`)) {
                dp[i] = dp[i - 1] + dp[i - 2];
            } else {
                dp[i] = dp[i - 1];
            }
        } else {
            dp[i] = dp[i - 2];
        }
    }

    return dp[n - 1];
}

const valid = message =>
    (message.length === 1 && message !== '0')
    || (message.length === 2 && (message[0] === '1' || (message[0] === '2' && message[1] < '7')));

module.exports = {
    decode,
    valid,
};

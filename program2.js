const decodeTheRing = function (s, p) {
    const sLen = s.length;
    const pLen = p.length;

    // Create a 2D DP table with dimensions (sLen + 1) x (pLen + 1)
    const dp = Array.from({ length: sLen + 1 }, () => Array(pLen + 1).fill(false));

    // Base case: empty pattern matches an empty string
    dp[0][0] = true;

    // Handle patterns with leading '*' that can match empty strings
    for (let j = 1; j <= pLen; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
                // Current characters match, or '?' matches any single character
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // '*' can match zero or more characters
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
        }
    }

    // The result is in the bottom-right corner of the DP table
    return dp[sLen][pLen];
};

module.exports = decodeTheRing;

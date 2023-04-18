const {longestPalindromicSubstring} = require('../src/longestPalindromicSubstring');

test("Returns longestPalindromicSubstring 'rabsabbascus'", () => {
    expect(longestPalindromicSubstring('rabsabbascus')).toEqual('sabbas');
});
test("Returns longestPalindromicSubstring 'cbbd'", () => {
    expect(longestPalindromicSubstring('cbbd')).toEqual('bb');
});
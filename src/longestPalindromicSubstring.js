const { stop, start, sayst } = require('../support/benchmark');

/**
 * @param {char[]} string
 * @return {char[]}
 */
const longestPalindromicSubstring = (s) => {
//var twoSum = function(nums, target) {
    start();
    let res = "";
    let max = 0;

    for(let i = 0; i < s.length; i++){
        for(let j = 0; j <= 1; j++){
            let l = i;
            let r = i + j;

            while(l >= 0 && r < s.length && s[l] === s[r]){
                let len = r - l + 1;
                if(len > max){
                    res = s.substring(l, r + 1);
                    max = len;
                }
                l--;
                r++;
            }
        }
    }
    stop();
    return res;
};

// Call twoSum function
sayst(longestPalindromicSubstring('rabsabbascus'));

//export module
if (typeof module === 'object') {
    module.exports = { longestPalindromicSubstring, }
}
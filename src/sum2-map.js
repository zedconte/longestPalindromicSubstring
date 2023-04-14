//import {stop, start, sayst } from '../support/benchmark.js';
const { stop, start, sayst } = require('../support/benchmark');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    start();
    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            stop();
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)
    }
};

// Call twoSum function
sayst(twoSum([2,7,11,15], 9));

//export module
if (typeof module === 'object') {
    module.exports = twoSum;
}
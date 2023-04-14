const { stop, start, sayst } = require('../support/benchmark');

//import {stop, start, sayst} from '../support/benchmark.js';
//const { stop, start, sayst } = require('../support/benchmark.js');

// Declare function
//function say(something) {


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
//var twoSum = function(nums, target) {
    start();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                stop();
                return [i, j]
            }
        }
    }

};

// Call twoSum function
sayst(twoSum([2,7,11,15], 9));

//export module
if (typeof module === 'object') {
    module.exports = { twoSum, }
}
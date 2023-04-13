// Declare function
function say(something) {
  
  if (typeof window !== 'undefined') {
    console.log(alert === window.alert); // 👉️ true    
    alert(something);// 👉️ can use alert()
  } else {
    console.log(something);    // 👉️ can't use alert()
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            return [i, j]
        }
    }
}
};

// Call function
say("Hey there!"); // Outputs Hey there! to the terminal
say(twoSum);

module.exports = twoSum;
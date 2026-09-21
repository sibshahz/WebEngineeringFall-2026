/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // we are going to iterate over array for once
  // create an empty object
  // check if target - current value exists in object
  // if it exists get it's value and push it in first index and value index in second to return it
  // if it doesn't exists set it as key and it's index as value in the object
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] !== undefined) {
      return [obj[target - nums[i]], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));

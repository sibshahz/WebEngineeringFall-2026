/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // we are going to take two pointers place one at start and second at the next poisition
  if (nums.length == 1) {
    return nums[0];
  } else if (nums.length == 2) {
    return Math.max(Math.max(nums[0], nums[1]), nums[0] + nums[1]);
  }

  let fP = 0;
  let sP = 1;
  let max = 0;
  let temp = nums[fP];
  // we are going to run the while loop until firstPointer is at the second last element in array
  while (fP < nums.length - 2) {
    temp += nums[sP];
    if (sP == nums.length - 1) {
      fP += 1;
      sP = fP + 1;
      max = Math.max(temp, max);
      temp = 0;
      temp += nums[fP];
    }
    sP += 1;
  }
  // we need a variable to hold the maximum sum at each point
  // we need a variable to hold a temporary sum of the firstPointer iteration
  // firstPointer iteration completes when secondPointer gets the number of last element
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

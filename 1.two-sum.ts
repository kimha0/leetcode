/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map()
  for (let idx in nums) {
    const complement = target - nums[idx]
    if (map.has(complement)) {
      return [map.get(complement), idx]
    }
    map.set(nums[idx], idx)
  }

  throw new Error('No two som solution')
};
// @lc code=end


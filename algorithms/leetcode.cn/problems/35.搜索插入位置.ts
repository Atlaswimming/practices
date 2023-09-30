/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  const l = nums.length;
  let i = 0;
  while (i < l) {
    if (nums[i] >= target) {
      return i;
    }
    i++;
  }
  if (i >= l) {
    return l;
  }
}
// @lc code=end
const r = searchInsert([1, 3, 5, 6], 7);
console.log("____", r);

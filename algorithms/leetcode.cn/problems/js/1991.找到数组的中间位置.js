/*
 * @lc app=leetcode.cn id=1991 lang=typescript
 *
 * [1991] 找到数组的中间位置
 */
// @lc code=start
function findMiddleIndex(nums) {
    let right = nums.reduce((s, current) => {
        return s + current;
    });
    let left = 0;
    let l = nums.length;
    let i = 0;
    while (l >= 0) {
        let cur = nums[i];
        if (left === right) {
            break;
        }
        left += cur;
        right -= cur;
        i++;
        l--;
        if (i === l) {
            break;
        }
    }
    return i;
}
;
// @lc code=end

findMiddleIndex([2,3,-1,8,4])
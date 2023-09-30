/*
 * @lc app=leetcode.cn id=1991 lang=typescript
 *
 * [1991] 找到数组的中间位置
 */

// @lc code=start
function findMiddleIndex(nums: number[]): number {
    let right = nums.reduce((s, current)=>{
        return s+current;
    })
    let left = 0;
    let l = nums.length;
    let i = 0;

    while (i!==l) {
        let cur = nums[i];
        right -= cur;        
        if(left === right) {
            break;
        }
        left += cur;
        i++;
    }
    if(i >= l) {
        return -1;
    }
    return i;
};
// @lc code=end

// const result = findMiddleIndex([2,3,-1,8,4]);
const result = findMiddleIndex([-2,4,-3,1,0])
console.log('result: ', result);
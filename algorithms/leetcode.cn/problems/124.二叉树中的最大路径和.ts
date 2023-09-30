/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxPathSum(root: TreeNode | null): number {
  //   let maximum: number = root.val;
  //
  //   const getMaxPath = (root: TreeNode | null) => {
  //     if (!root || root.val === null) {
  //       return 0;
  //     }
  //     const left = Math.max(0, getMaxPath(root.left));
  //     const right = Math.max(0, getMaxPath(root.right));
  //     maximum = Math.max(maximum, root.val + left + right);
  //     return Math.max(left, right) + root.val;
  //   };
  //
  //   getMaxPath(root);
  //   return maximum;

  let res = root.val;
  const travel = (root) => {
    if (!root) {
      return 0;
    }
    const left = Math.max(0, travel(root.left));
    const right = Math.max(0, travel(root.right));
    res = Math.max(res, root.val + left + right);
    return Math.max(left, right) + root.val;
  };
  travel(root);
  return res;
}
// @lc code=end

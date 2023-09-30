/*
 * @lc app=leetcode.cn id=129 lang=typescript
 *
 * [129] 求根节点到叶节点数字之和
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

function sumNumbers(root: TreeNode | null): number {
  let sum: number = 0;
  function travel(node, sumOfcurrentLine) {
    if (node.left) {
      travel(node.left, sumOfcurrentLine * 10 + node.val);
    }

    if (node.right) {
      travel(node.right, sumOfcurrentLine * 10 + node.val);
    }

    if (!node.left && !node.right) {
      sum += sumOfcurrentLine * 10 + node.val;
    }
  }
  travel(root, sum);

  return sum;
}
// @lc code=end

import createTree from "./utils/createTree";
import type { TreeNode } from "./utils/createTree";
// const sourceArray = [1, 2, 3];
const sourceArray = [4, 9, 0, 5, 1];
const root = createTree(sourceArray);
const result = sumNumbers(root);
console.log("result: ", result);

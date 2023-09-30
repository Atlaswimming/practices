export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const createTree: (source: Array<number | null>) => TreeNode | null = (
  source
) => {
  const l = source.length;
  if (l === 0) {
    return null;
  }
  const root = {
    val: source[0],
    left: null,
    right: null,
  };
  let lastNodeIndex = 0; // 缓存当千层最后一个节点的索引
  let level = 0;
  const nodeList = [[root]];
  let count = l - 1;
  while (count > 0) {
    const nodesLiteOfCurrentLevel = nodeList[level];
    const nodesListOfNextLevle = [];

    for (let m = 0, n = 0; m < nodesLiteOfCurrentLevel.length; m++) {
      if (nodeList[level][m] === null || nodeList[level][m].val === null) {
        continue;
      }
      const leftVal = source[lastNodeIndex + n * 2 + 1];
      typeof leftVal === "number" &&
        (nodeList[level][m].left = {
          val: leftVal,
          left: null,
          right: null,
        });
      nodesListOfNextLevle.push(nodeList[level][m]?.left);

      const rightVal = source[lastNodeIndex + n * 2 + 2];

      typeof rightVal === "number" &&
        (nodeList[level][m].right = {
          val: rightVal,
          left: null,
          right: null,
        });
      nodesListOfNextLevle.push(nodeList[level][m]?.right || null);
      n++;
    }

    count -= nodesListOfNextLevle.length;
    lastNodeIndex += nodesListOfNextLevle.length;
    level++;

    nodeList.push(nodesListOfNextLevle);
  }
  return root;
};

// const tree = createTree([
//   1,
//   2,
//   3,
//   4,
//   5,
//   null,
//   6,
//   7,
//   8,
//   9,
//   10,
//   null,
//   11,
//   12,
//   13,
//   null,
//   14,
// ]);
// const tree = createTree([1, null, 2, 3]);
const tree = createTree([4, 9, 0, 5, 1]);

console.log("root: ", tree, JSON.stringify(tree));

export default createTree;

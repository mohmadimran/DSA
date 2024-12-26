// Problem Description
// Given postorder and inorder traversal of a tree, construct the binary tree and return its root. Note: You may assume that duplicates do not exist in the tree.

// Input format
// First line contains N, number of elements in the tree.

// Next line contains N space separated integers, denoting postorder.

// Next line contains N space separated integers, denoting inorder.

// Output format
// Print two lines, first line contains N space separated integers denoting postorder.

// Second line contains N space separated integers, denoting inorder.

// Note: You just have to return the root of the tree. The input/output is already handled.

// Sample Input 1
// 5

// 10 4 5 7 8

// 8 10 4 7 5

// Sample Output 1
// 10 4 5 7 8

// 8 10 4 7 5

// Explanation
// The below tree can be formed with the given postorder and inorder Visualization:

// image

// Constraints
// 1 <= N <= 10^5

// -10^9 <= Value of node <= 10^9

const TreeNode = require('../crio/javascript/ds/TreeNode/TreeNode');

/*
Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next =null;
        this.parent = null;
    }
}
*/
/**
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function helperFun(postSt, postEnd, inSt, inEnd, postorder, inorder, stor) {
    if (postSt > postEnd || inSt > inEnd) {
        return null;
    }
    let rootVal = postorder[postEnd];
    let root = new TreeNode(rootVal);
    let rootIndex = stor.get(rootVal);
    let leftTZ = rootIndex - inSt;
    root.left = helperFun(postSt, postSt + leftTZ - 1, inSt, rootIndex - 1, postorder, inorder, stor);
    root.right = helperFun(postSt + leftTZ, postEnd - 1, rootIndex + 1, inEnd, postorder, inorder, stor);
    return root;
}

function constructBinaryTreeFromPostorderAndInorderTraversal(postorder, inorder) {
    let stor = new Map();
    for (let i = 0; i < inorder.length; i++) {
        stor.set(inorder[i], i);
    }

    return helperFun(0, postorder.length - 1, 0, inorder.length - 1, postorder, inorder, stor);
}

module.exports = constructBinaryTreeFromPostorderAndInorderTraversal;


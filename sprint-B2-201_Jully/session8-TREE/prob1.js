// Problem Description
// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note: You may assume that duplicates do not exist in the tree.

// Input format
// First line contains N, the number of elements in the tree.

// Next line contains N space separated integers, denoting preorder.

// Next line contains N space separated integers, denoting inorder.

// Output format
// Print two lines by traversing the constructed binary tree.

// First line should contain N space separated integers, denoting preorder.

// Second line should contain N space separated integers, denoting inorder.

// Sample Input 1
// 6

// 1 2 4 5 3 6

// 5 4 2 1 3 6

// Sample Output 1
// 1 2 4 5 3 6

// 5 4 2 1 3 6

// Explanation 1
// The output writes out the preorder and inorder sequence by traversing the binary tree constructed, so it should be the same as the output.

const TreeNode = require('../crio/javascript/ds/TreeNode/TreeNode');

/*
Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function constructBinaryTree(pSt, pEnd, inSt, inEnd, preorder, inOrderMap) {
    if (pSt > pEnd || inSt > inEnd) {
        return null;

    }
    let rootVal = preorder[pSt];
    let root = new TreeNode(rootVal);
    let rootIndex = inOrderMap.get(rootVal);
    let leftSize = rootIndex - inSt;
    root.left = constructBinaryTree(pSt + 1, pSt + leftSize, inSt, rootIndex - 1, preorder, inOrderMap);
    root.right = constructBinaryTree(pSt + leftSize + 1, pEnd, rootIndex + 1, inEnd, preorder, inOrderMap);
    return root;
}
function constructBinaryTreeFromPreorderAndInorderTraversal(preorder, inorder) {
    let inOrderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inOrderMap.set(inorder[i], i);
    }
    let root = constructBinaryTree(0, preorder.length - 1, 0, inorder.length - 1, preorder, inOrderMap)
    return root;
}

module.exports = constructBinaryTreeFromPreorderAndInorderTraversal;
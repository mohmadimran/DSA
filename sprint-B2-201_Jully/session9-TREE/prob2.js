// Problem Description
// Given a binary search tree, write a function to find the node with the kth smallest value in it and return its value.

// Note: You may assume that k is always valid, 1 ≤ k ≤ BST's total elements.

// Input format
// Line1 to X: Details of the binary tree structure (refer section below for the format)

// Last line contains a single integer k.

// Output format
// Print the value of the kth smallest element.

// Constraints
// 1 <= Number of nodes (N) <= 105

// 1 <= Value of nodes <= 109

// 1 <= k <= N

// Sample Input 1
// 4

// 3 1 4 2

// 1 2 3

// 2 -1 4

// 3 -1 -1

// 4 -1 -1

// 1

// Sample Output 1
// 1

// Explanation 1
// image

// 1 is the 1st smallest element in this BST

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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
let remainingValue = 0;
let result = 0;
function inOrder(root) {
    if (root == null) {
        return;
    }
    inOrder(root.left);
    remainingValue--;
    if (remainingValue == 0) { // corrected here
        result = root.val;
        return; // To stop further traversal once the kth smallest element is found
    }
    inOrder(root.right);
}

function kthSmallestElementInABst(root, k) {
    remainingValue = k;
    result = -1;
    inOrder(root);
    return result;
}

module.exports = kthSmallestElementInABst;

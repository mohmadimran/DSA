// Problem Description
// Given a binary tree, return the root of the mirror binary tree. Mirror binary tree of a binary tree is a binary tree with left and right children of all nodes interchanged.

// image

// Input format
// First line contains an integer t - Number of test cases.

// First line of each test case contains an integer n - Number of nodes.

// Second line of each test case contains n integers - Value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Print the inorder traversal of the mirror tree in a separate line for each test case.

// Sample Input 1
// 2

// 4

// 10 5 9 7

// 1 2 3

// 2 -1 -1

// 3 4 -1

// 4 -1 -1

// 3

// 4 9 3

// 1 2 3

// 2 -1 -1

// 3 -1 -1

// Sample Output 1
// 9 7 10 5

// 3 4 9

// Explanation
// First test case:

// image

// Second test case:

// image

// Constraints
// 1 <= t <= 10

// 1 <= n <= 10^5

// 1 <= value of nodes <= 10000

// Resources

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
 * @return {TreeNode}
 */
function mirrorBinaryTree(root) {
    if (root === null) {
        return null;
    }
    
    // Swap the left and right children recursively
    let left = mirrorBinaryTree(root.left);
    let right = mirrorBinaryTree(root.right);
    
    root.left = right;
    root.right = left;
    
    return root;
}

module.exports = mirrorBinaryTree;

// Helper function to build the tree from input for testing purposes
function buildTree(values, children) {
    if (values.length === 0) return null;

    let nodes = values.map(val => new TreeNode(val));
    
    for (let [i, l, r] of children) {
        if (l !== -1) {
            nodes[i].left = nodes[l];
        }
        if (r !== -1) {
            nodes[i].right = nodes[r];
        }
    }
    
    return nodes[0];
}

// Helper function to perform inorder traversal
function inorderTraversal(root, result) {
    if (root === null) {
        return;
    }
    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);
}

// Example usage:
// Suppose we have a tree structure and we want to mirror it and print its inorder traversal
const values = [10, 5, 9, 7];
const children = [
    [0, 1, 2], // Node 0 (10) has children 1 (5) and 2 (9)
    [1, -1, -1], // Node 1 (5) has no children
    [2, 3, -1], // Node 2 (9) has child 3 (7) on the left
    [3, -1, -1] // Node 3 (7) has no children
];
let root = buildTree(values, children);
let mirroredRoot = mirrorBinaryTree(root);
let result = [];
inorderTraversal(mirroredRoot, result);
console.log(result); // Output the inorder traversal of the mirrored tree

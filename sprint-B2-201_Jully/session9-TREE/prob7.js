// Problem Description
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// The lowest common ancestor is defined between two nodes p and q as the lowest node in the tree that has both p and q as descendants (where we allow a node to be a descendant of itself).

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Last line contains two integers p and q - The given nodes.

// Output format
// Output an integer - The value of the LCA node.

// Sample Input 1
// 7

// 40 20 60 10 30 50 70

// 1 2 3

// 2 4 5

// 3 6 7

// 4 -1 -1

// 5 -1 -1

// 6 -1 -1

// 7 -1 -1

// 30 60

// Sample Output 1
// 40

// Explanation
// The binary search tree is:-

// image

// The node 40 is the lowest node which has both 30 & 60 as its descendants.
// Sample Input 2
// 4

// 3 1 4 2

// 1 2 3

// 2 -1 4

// 3 -1 -1

// 4 -1 -1

// 2 4

// Sample Output 2
// 3

// Explanation
// The binary search tree is:-

// image

// Constraints
// 1 <= N <= 10^5

// 1 <= Values of the Nodes <= 10^9

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestorInBST(root, p, q) {
    while (root !== null) {
        // If both p and q are smaller than root, LCA lies in left subtree
        if (p.val < root.val && q.val < root.val) {
            root = root.left;
        }
        // If both p and q are greater than root, LCA lies in right subtree
        else if (p.val > root.val && q.val > root.val) {
            root = root.right;
        }
        // If p and q lie on different sides of root, or one of them is root, then root is the LCA
        else {
            return root;
        }
    }
    return null; // Should never reach here if p and q are guaranteed to be in the BST
}

module.exports = lowestCommonAncestorInBST;

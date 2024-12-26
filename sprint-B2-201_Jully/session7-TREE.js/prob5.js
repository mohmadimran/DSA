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

function getLeftBoundary(node, leftBoundary) {
    while (node) {
        if (node.left || node.right) {
            leftBoundary.push(node.val); // Collect left boundary nodes
        }
        if (node.left) {
            node = node.left; // Traverse left if possible
        } else {
            node = node.right; // Traverse right if left is not available
        }
    }
}

function getRightBoundary(node, rightBoundary) {
    while (node) {
        if (node.left || node.right) {
            rightBoundary.push(node.val); // Collect right boundary nodes
        }
        if (node.right) {
            node = node.right; // Traverse right if possible
        } else {
            node = node.left; // Traverse left if right is not available
        }
    }
}

function getLeaves(node, leaves) {
    if (!node) return;
    if (!node.left && !node.right) {
        leaves.push(node.val); // Collect leaf nodes
    }
    getLeaves(node.left, leaves);
    getLeaves(node.right, leaves);
}

function binaryTreeBoundaryTraversal(root) {
    if (!root) return [];
    
    // Initialize boundary arrays
    const leftBoundary = [];
    const rightBoundary = [];
    const leaves = [];
    if(!root.left && !root.right){
        return [root.val];
    }
    // Collect left boundary nodes (excluding the root)
    if (root.left) getLeftBoundary(root.left, leftBoundary);
    
    // Collect right boundary nodes (excluding the root)
    if (root.right) getRightBoundary(root.right, rightBoundary);
    
    // Collect all leaf nodes
    getLeaves(root, leaves);
    
    // Combine results: root node, left boundary, leaves, and reversed right boundary
    const result = [root.val];
    result.push(...leftBoundary);
    result.push(...leaves);
    result.push(...rightBoundary.reverse());
    
    return result; // Return the final boundary traversal
}

module.exports = binaryTreeBoundaryTraversal;

// Helper function to build the tree from input for testing purposes
function buildTree(values, children) {
    if (values.length === 0) return null;

    // Create nodes from values
    let nodes = values.map(val => new TreeNode(val));
    
    // Assign left and right children based on the input
    for (let [i, l, r] of children) {
        if (l !== -1) {
            nodes[i - 1].left = nodes[l - 1];
        }
        if (r !== -1) {
            nodes[i - 1].right = nodes[r - 1];
        }
    }
    
    return nodes[0]; // Return the root of the tree
}

// Example usage:
const values = [10, 15, 25, 12, 40, 16, 8, 9];
const children = [
    [1, 5, 3], // Node 1 (10) has children 5 (40) and 3 (25)
    [5, 6, -1], // Node 5 (40) has child 6 (16)
    [6, -1, 7], // Node 6 (16) has child 7 (8)
    [7, -1, -1], // Node 7 (8) has no children
    [3, 2, 4], // Node 3 (25) has children 2 (15) and 4 (12)
    [2, 8, -1], // Node 2 (15) has child 8 (9)
    [8, -1, -1], // Node 8 (9) has no children
    [4, -1, -1] // Node 4 (12) has no children
];
let root = buildTree(values, children);
let boundary = binaryTreeBoundaryTraversal(root);
console.log(boundary); // Output should be [10, 40, 16, 8, 9, 12, 25]


// Problem Description
// Given a binary tree, print boundary nodes of the binary tree Anti-Clockwise starting from the root. The boundary includes left boundary, leaves, and right boundary in order.

// The left boundary is defined as the path from the root to the left-most node. The right boundary is defined as the path from the root to the right-most node. If the root doesn’t have a left subtree or right subtree, then the root itself is left boundary or right boundary. Note this definition only applies to the input binary tree, and not to any subtrees.

// The left-most node is defined as a leaf node you could reach when you always firstly travel to the left subtree if it exists. If not, travel to the right subtree. Repeat until you reach a leaf node.

// The right-most node is also defined in the same way with left and right exchanged.

// Example:-

// image

// The output for this tree would be 1,2,4,5,6 and 3.

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Output space separated values of the nodes.

// Sample Input 1
// 8

// 10 15 25 12 40 16 8 9

// 1 5 3

// 5 6 -1

// 6 -1 7

// 7 -1 -1

// 3 2 4

// 2 8 -1

// 8 -1 -1

// 4 -1 -1

// Sample Output 1
// 10 40 16 8 9 12 25

// Explanation
// The binary tree is:-

// image

// Boundary traversal starts from the root node i.e. 10 then the left boundary i.e. 10, 40, 16, 8, the leaf nodes i.e. 8, 9, 12 and finally the right boundary i.e. 12, 25, 10. We won't take a particular node twice so the final answer after ignoring the repeated nodes would be - 10, 40, 16, 8, 9, 12, 25.

// Sample Input 2
// 4

// 1 2 3 4

// 1 2 -1

// 2 -1 3

// 3 4 -1

// 4 -1 -1

// Sample Output 2
// 1 2 3 4

// Explanation
// The binary tree is:-

// image

// The left boundary for this tree is 1, 2, 3, 4.

// 4 is the only leaf node and the right boundary consists only of the root node.

// Constraints
// 1 <= N <= 10^5

// 1 <= Values of the Nodes <= 10^9
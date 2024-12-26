// Problem Description
// Given a binary tree, return the inorder traversal of its nodes' values.

// For the tree given shown here

// image

// Inorder Traversal would result in - Process (Left, Root, Right) : 4 2 5 1 3

// Input format
// First line contains T, denoting the number of test cases given.

// For each test case, we follow the following format:

// First line contains N, denoting the number of nodes the tree has.

// The next N lines contain the binary tree structure ( format is explained at the end of this page).

// Output format
// For each test case, print on a new line, n space separated integers denoting the inorder traversal of the nodes.

// Constraints
// 1<= T <= 1000

// 1<= Number of nodes in a Tree <=10000

// 0 <= Value of the nodes <= 10^9

// It's guaranteed that the sum of the number of tree nodes across all test cases will be less than 500000.

// Sample Input 1
// 1

// 5

// 5 1 4 3 6

// 1 2 3

// 2 -1 -1

// 3 4 5

// 4 -1 -1

// 5 -1 -1

// Sample Output 1
// 1 5 3 4 6

// Explanation 1
// The tree can be represented as :

// image

// The inorder is hence 1 , 5 , 3 , 4 , 6.

// Sample Input 2
// 1

// 3

// 2 1 3

// 1 2 3

// 2 -1 -1

// 3 -1 -1

// Sample Output 2
// 1 2 3

// Explanation 2
// The tree can be represented as :

// image

// The inorder is hence 1 , 2 , 3.


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
function inOrder(root, arr) {
    if (root == null) {
        return;
    }
    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
}

function inorderTraversal(root) {
    let arr = [];
    inOrder(root, arr);
    return arr;
}

module.exports = inorderTraversal;
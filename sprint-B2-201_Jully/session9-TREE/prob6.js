const TreeNode = require("../crio/javascript/ds/TreeNode/TreeNode");
/*
Definition for TreeNode
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;

    }
}

Use new TreeNode(data) to create new Node
*/


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function preorder(root,list){
    if(root == null){
        return;
    }
    list.push(root.val);
    preorder(root.left,list);
    preorder(root.right,list);
}

function preorderTraversal(root) {
    const list = new Array();
    preorder(root,list);
    return list;
}


module.exports = preorderTraversal;

// Problem Description
// Given a binary tree, return the preorder traversal of its nodes' values.

// For the tree given Preorder traversal will be:

// image

// Preorder Traversal Means: Process (Root, Left, Right) : 1 2 4 5 3


// Note that input and output are being handled by a main() method behind the scenes, so you do NOT have to implement the main() method or any I/O here. The inputs are sent as arguments to the function you have to implement.


// You’d have to implement the function defined in the stub, use the arguments, and return the answer based on the return type of the function.


// The structure of the tree is given as a reference for you while writing the code. Do not make any modifications to it, or any of the rest of the stub, or the tests would fail

// Input format
// First line contains T, denoting the number of test cases given.

// For each test case, we follow the following format:

// First line contains N, denoting the number of nodes the tree has.

// In each test case tree will be given to you.

// Output format
// For each test case,print in a new line n space separated integers. The values of preorder traversal of the nodes.

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
// 5 1 4 3 6

// Explanation 1
// Treeview:

// image

// Sample Input 2
// 1

// 3

// 2 1 3

// 1 2 3

// 2 -1 -1

// 3 -1 -1

// Sample Output 2
// 2 1 3

// Explanation 2
// Treeview :

// image

// Constraints
// 1<=T<=1000

// 1<=N<=10000

// 0 <= A[i] <= 10^9

// It's guaranteed that the sum of Number of tree nodes for all test cases will be less than 500000.
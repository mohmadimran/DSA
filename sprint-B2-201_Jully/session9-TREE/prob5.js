// Problem Description
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. LCA between two nodes p and q is defined as the lowest node in the tree that has both p and q as descendants (where we allow a node to be a descendant of itself)

// Note: For the solution method provided, the input parameters are the nodes p and q, not node values. The return value expected from the method is the LCA node and not the node’s value. The below Input and Output format show node values which the Driver file will take care of; the user doesn’t have to edit the Driver code.

// Input format
// Line 1 has T: no of test cases given.

// Line 2 to X: First test case details with first set of lines giving the binary tree structure (refer section below for the format) and last line giving two node values (integers) whose LCA node has to be found.

// Line X+1 to Y: Second Test case details and so on.

// Output format
// Print the value of the node which is the common ancestor of two nodes.

// Constraints
// 1 <= T <= 1000

// 1 <= N <= 10000, Number of nodes in the tree

// 0 <= Node values <= 10^9

// It is guaranteed that the sum of the number of tree nodes for all test cases will be < 500000.

// Sample Input 1
// 1

// 5

// 2 3 7 8 9

// 1 2 3

// 2 4 5

// 3 -1 -1

// 4 -1 -1

// 5 -1 -1

// 7 2

// Sample Output 1
// 2

// Explanation 1
// image

// The LCA of node with value 2 and node with value 7 is the node with value 2.

// Instructions to create custom input for a Binary Tree
// In order to specify a binary tree that can be used as custom input to the problem, you’ll need to follow this convention.

// Line 1: Number of nodes in the Binary Tree (N)

// Line 2: N space separated node values. The position of the Nodes on this line will be used to refer to them in the below lines, starting from 1.

// Line 3 to N+2: Lines specifying the child nodes for each of the N nodes

// Format of each line (space separated): Parent_node Left_child_node Right_child_node

// * Parent_node - Node at this Position on Line 2 is the Node to which we are assigning the Left and Right child here

// * Left_child_node - Node at this position on Line 2 is the left child. Specify -1 if there is no Left child.

// * Right_child_node - Node at this position on Line 2 is the right child. Specify -1 if there is no Right child.
// Example1
// image
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
function commonAncestor(root, p, q){

    if(root == null || root == p || root==q){
        return root;
    }
    let left = commonAncestor(root.left,p,q);
    let right = commonAncestor(root.right,p,q);
    if(left != null && right != null){
        return root ;
    }
    if(left != null){
        return left;
    }
    if(right != null){
        return right ;
    }
    return null ;
}

module.exports = commonAncestor;
/* 
Crio Methodology

Milestone 1: Understand the problem clearly
1. Ask questions & clarify the problem statement clearly.
2. Take an example or two to confirm your understanding of the input/output

Milestone 2: Finalize approach & execution plan
1. Understand what type of problem you are solving and see if you can recollect solving similar problems in the past
      a. Obvious logic (this would only test ability to convert logic to code)
      b. Figuring out logic
      c. Knowledge of specific algorithm, data structure or pattern
      d. Knowledge of specific domain or concepts
      e. Mapping real world into abstract concepts/data structures
2. Brainstorm multiple ways to solve the problem and pick one based on the TC/SC requirements
3. Get to a point where you can explain your approach to a 10 year old

Milestone 3 : Come up with an Instruction Manual for a 10 year old
1. Take a stab at the high-level logic & write it down like a detailed Instruction Manual for a 10 Year old where each line of the manual can be expanded into a logical line(s) of code.
2. Try to offload logic out of the main section as much as possible by delegating to functions.

Milestone 4: Code by expanding your 10 Year Olds "Instruction Manual
1. Run your code snippets at every logical step to test correctness (Helps avoid debugging larger pieces of code later)
2. Make sure you name the variables, functions clearly.
3. Use libraries as much as possible

Milestone 5: Prove that your code works using custom test cases
1. Make sure you check boundary conditions and other test cases you noted in Milestone 1
      a. If compiler is not available, dry run your code on a whiteboard or paper
2. Suggest optimizations if applicable during interviews
*/

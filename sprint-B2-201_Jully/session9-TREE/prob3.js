// Problem Description
// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with values less than the node's value.

// The right subtree of a node contains only nodes with values greater than the node's value.

// Both the left and right subtrees must also be binary search trees.

// Input format
// Line1: Number of Test cases (T)

// Line2 to X: First Test Case’s binary tree structure (refer section below for the format)

// LineX+1 to Y: Second Test Case’s binary tree structure and so on.

// Output format
// Print "Yes" if the tree is a valid BST, else print "No", for every Test Case on a separate line.

// Constraints
// 1 <= T <= 1000

// 1<= Number of Nodes <= 10000

// 0 <= Node values <= 10^5

// It is guaranteed that the sum of Number of tree nodes across all test cases will be less than 500000.

// Sample Input 1
// 1

// 3

// 2 1 3

// 1 2 3

// 2 -1 -1

// 3 -1 -1

// Sample Output 1
// Yes

// Explanation 1
// image

// The root node's value is 2 which is greater than 1 and lesser than 3. Therefore it is a valid BST.

// Sample Input 2
// 1

// 5

// 5 1 4 3 6

// 1 2 3

// 2 -1 -1

// 3 4 5

// 4 -1 -1

// 5 -1 -1

// Sample Output 2
// No

// Explanation 2
// image

// The root node's value is 5 which is greater than 4. This violates the condition of a valid BST. Therefore it is not a valid BST

// Resources
// Validate BST
// Instructions to create custom input for a Binary Tree
// In order to specify a binary tree that can be used as custom input to the problem, you’ll need to follow this convention.

// Line 1: Number of nodes in the Binary Tree (N)

// Line 2: N space separated node values. The position of the Nodes on this line will be used to refer to them in the below lines, starting from 1.

// Line 3 to N+2: Lines specifying the child nodes for each of the N nodes

// Format of each line (space separated): Parent_node Left_child_node Right_child_node

// Parent_node - Node at this Position on Line 2 is the Node to which we are assigning the Left and Right child here

// Left_child_node - Node at this position on Line 2 is the left child. Specify -1 if there is no Left child.

// Right_child_node - Node at this position on Line 2 is the right child. Specify -1 if there is no Right child.

const TreeNode = require('../crio/javascript/ds/TreeNode/TreeNode');

/* Definition for TreeNode
class TreeNode{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
*/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function validateBST(root,min,max){
    if(root == null){
        return true;
    }
    if(root.val <= min || root.val >= max){
        return false;
    }
    let isLeftList = validateBST(root.left,min,root.val);
    let isRightList = validateBST(root.right,root.val,max);
    return isLeftList && isRightList;
}
function validateBinarySearchTree(root) {
return validateBST(root,Number.MIN_VALUE,Number.MAX_VALUE);
}
    
module.exports = validateBinarySearchTree;
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
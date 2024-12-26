// Problem Description
// Given a binary tree, return the level order traversal of its nodes' values.(ie, from left to right, level by level).


// Note that input and output are being handled by a main() method behind the scenes, so you do NOT have to implement the main() method or any I/O here. The inputs are sent as arguments to the function you have to implement.


// You’d have to implement the function defined in the stub, use the arguments, and return the answer based on the return type of the function.


// The structure of the tree is given as a reference for you while writing the code. Do not make any modifications to it, or any of the rest of the stub, or the tests would fail

// Input Format
// First line contains one integer N denoting the number of elements in the array

// Next line contains N words denoting the elements of Binary Tree where null means no element.

// Constraints
// 1<=N<=10^5

// 1<=Ai<=10^9

// Output Format
// Print elements of each level in a separate line.

// Sample Input 1
// 4

// 4 3 2 1

// 1 2 3

// 2 4 -1

// 3 -1 -1

// 4 -1 -1

// Treeview:

// image

// Sample Output 1
// 4

// 3 2

// 1

// Sample Input 2
// 5

// 5 5 2 4 5

// 1 2 3

// 2 -1 4

// 3 -1 5

// 4 -1 -1

// 5 -1 -1

// Treeview:

// image

// Sample Output 2
// 5

// 5 2

// 4 5

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

function binaryTreeLevelOrderTraversal(root) {
    const q = [root];
    const levels = [];
    while (q.length > 0) {
        const level = [];
        let size = q.length;
        for (let i = 1; i <= size; i++) {
            let curr = q.shift();
            level.push(curr ? curr.val : null);
            if (curr && curr.left != null) {
                q.push(curr.left);
            }
            if (curr && curr.right != null) {
                q.push(curr.right);
            }

        }
        levels.push(level);
    }
    return levels;
}

module.exports = binaryTreeLevelOrderTraversal;
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
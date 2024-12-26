// Problem Description
// Given a binary tree, return the zigzag level order traversal of its nodes' values.

// (i.e. from left to right, then right to left for the next level and alternate for every level).


// For the tree given, zigzag traversal will be:

// image

// 1

// 3 2

// 4 5

// Input format
// Line 1 has the number of test cases (T)

// Line 2 to X: First Test Case details with the binary tree structure (refer section below for the format)

// Line X+1 to Y: Second Test case details and so on.

// Output format
// For each test case, print K lines, where K is the height of the tree. In each line print the values of the zigzag traversed node values.

// Constraints
// 1 <= T <= 1000

// 1 <= Number of nodes in a Tree <= 10000

// 0 <= Value of each node <= 10^9

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
// 5

// 4 1

// 3 6

// Explanation 1
// Treeview

// image
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
        this.parent = null;
    }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
    let ans = [];
    if (root === null) {
        return ans;
    }
    
    let q = [root]; // Initialize queue with the root node
    let isZigzag = false; // Use boolean flag instead of integer for levels
    
    while (q.length > 0) {
        let level = [];
        let size = q.length;
        
        for (let i = 0; i < size; i++) {
            let node = q.shift(); // Inefficient, but kept for simplicity
            level.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        
        if (isZigzag) {
            level.reverse();
        }
        
        ans.push(level);
        isZigzag = !isZigzag; // Toggle the boolean flag
    }
    
    return ans;
}

// Sample usage:
const root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);

const result = zigzagLevelOrder(root);
result.forEach(level => console.log(level.join(' ')));

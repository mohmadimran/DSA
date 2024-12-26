// Problem Description
// You are given a binary tree.

// You need to find the nodes in order of top to bottom which will be visible when the tree is viewed from the right side.

// Right view :-

// image

// The visible nodes from top to bottom are 1, 3 and 4.

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Output space separated values of the nodes visible from right side of the tree from top to bottom.

// Sample Input 1
// 6

// 10 15 25 12 40 16

// 4 -1 -1

// 1 5 3

// 5 6 -1

// 6 -1 -1

// 2 -1 -1

// 3 2 4

// Sample Output 1
// 10 25 12

// Explanation
// The binary tree is:-

// image

// The visible nodes from top to bottom are 10, 25 and 12.

// Constraints
// 1 <= N <= 10^5

// 1 <= Values of the Nodes <= 10^9

const TreeNode = require('../crio/javascript/ds/TreeNode/TreeNode');
const ListNode = require('../crio/javascript/ds/ListNode/ListNode');

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

/***************** Queue Implementation Start *******************************************/
/****************Do not edit this class************************/

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    // adding node at the end
    enqueue(val) {
        let node = new ListNode(val);
        this.length++;
        if (this.rear == null) {
            this.front = this.rear = node;
            return;
        }
        this.rear.next = node;
        this.rear = node;
    }

    // removing node from front
    dequeue() {
        if (this.front == null) {
            return;
        }
        let val = this.front.val;
        this.length--;
        this.front = this.front.next;
        if (this.front == null) {
            this.rear = null;
        }
        return val;
    }

    // returning the frontmost element
    peek() {
        if (this.front == null) {
            return undefined;
        }
        return this.front.val;
    }

    // Returns true if empty
    isEmpty() {
        return this.length === 0;
    }
}
/***************** Queue Implementation End *******************************************/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightViewBinaryTree(root) {
    if (!root) return []; // Handle the case where root is null

    let que = new Queue();
    que.enqueue(root);
    let ans = [];
    
    while (que.length > 0) {
        let levelSize = que.length;
        for (let i = 0; i < levelSize; i++) {
            let curNode = que.dequeue();
            if (i === levelSize - 1) {
                ans.push(curNode.val);
            }
            if (curNode.left != null) {
                que.enqueue(curNode.left);
            }
            if (curNode.right != null) {
                que.enqueue(curNode.right);
            }
        }
    }
    
    return ans;
}

module.exports = rightViewBinaryTree;

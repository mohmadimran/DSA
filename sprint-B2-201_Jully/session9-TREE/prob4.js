// Problem Description
// You are given a binary tree. You need to find the nodes in order of left to right which will be visible when the tree is viewed from the top.

// Top view :-

// image

// The visible nodes from left to right are 4, 2, 1 and 3.

// Input format
// First line contains an integer n - Number of nodes.

// Second line contains n space separated integers - The value of nodes.

// Next n lines contain 3 space separated integers i, l, r describing left and right child of ith node as l and r respectively.

// Output format
// Output space separated values of the nodes visible from top of the tree from left to right.

// Sample Input 1
// 7

// 10 15 25 12 40 16 20

// 4 -1 -1

// 1 5 3

// 5 6 -1

// 6 -1 7

// 2 -1 -1

// 3 2 4

// 7 -1 -1

// Sample Output 1
// 16 40 10 25 12

// Explanation
// The binary tree is:-

// image

// The visible nodes from left to right are 16, 40, 10, 25 and 12.

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

/***************** Queue Implementation Start *******************************************/
/****************Do not edit this class************************/

const ListNode = require("../crio/javascript/ds/ListNode/ListNode");
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
function topViewBinaryTree(root) {

    let q = new Queue();
    q.enqueue([root, 0]);
    let map = new Map();
    let minVl = 0;
    while(!q.isEmpty()){  // corrected here
        let arr = q.dequeue();
        let node = arr[0];
        let vl = arr[1];
        minVl = Math.min(minVl, vl);
        if (!map.has(vl)) {
            map.set(vl, node.val);  // corrected node.vl to node.val
        }
        if (node.left != null) {
            q.enqueue([node.left, vl - 1]);
        }
        if (node.right != null) {
            q.enqueue([node.right, vl + 1]);
        }
    }
    let arr = [];
    for (let k = minVl; k < minVl + map.size; k++) {
        arr.push(map.get(k));
    }
    return arr;
}

module.exports = topViewBinaryTree;

// Problem Description
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// Input format
// First line contains an integer N - Number of nodes in the linked list.

// Second line contains N integers representing the linked list.

// Output format
// Return the head of the reordered linked list.

// Sample Input 1
// 5

// 1 5 3 4 8

// Sample Output 1
// 1 3 8 5 4

// Explanation
// Arranging the odd nodes first i.e. 1st, 3rd, 5th node and then the even nodes i.e. 2nd, 4th will give us 1, 3, 8, 5, 4.

// Constraints
// 0 <= N <= 10^5

// -10^9 <= Value of node <= 10^9

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function groupOddEven(head) {
    if (!head || !head.next) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
}

/**
 * Converts an array to a linked list.
 * @param {number[]} array
 * @return {ListNode}
 */
function arrayToList(array) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of array) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

/**
 * Converts a linked list to an array.
 * @param {ListNode} list
 * @return {number[]}
 */
function listToArray(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    return result;
}

// Example usage:
const nums = [1, 5, 3, 4, 8]; // Sample input
const head = arrayToList(nums);
const resultHead = groupOddEven(head);
const resultArray = listToArray(resultHead);

console.log(resultArray); // Output: [1, 3, 8, 5, 4]

module.exports = groupOddEven;

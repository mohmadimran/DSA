// Problem Description
// Given a singly linked list of integers, reverse every contiguous set of nodes that have only even values.

// Input format
// N - An integer denoting the number of nodes in the linked list.

// N integers follow where ith integer denotes the ith node value in the linked list

// Output format
// Return the head of the modified list

// Constraints
// 0 <= N <= 10^5

// -10^9 <= value <= 10^9

// Sample Input 1
// 8

// 1 2 3 3 4 6 8 5

// Sample Output 1
// 1 2 3 3 8 6 4 5

// Explanation 1
// There are two sublists of even elements, which [2] and [4->6->8]. The sublist [4->6->8] has been reversed and the single sublist [2] need not be reversed.

// Sample Input 2
// 6

// 1 3 2 5 4 6

// Sample Output 2
// 1 3 2 5 6 4

// Explanation 2
// There are two sublists of even elements which are [2] and [4 6]. The [4,6] sublist has been reversed and the single sublist [2] need not be reversed. Rest of the odd values remain constant.

const ListNode = require("../crio/javascript/ds/ListNode/ListNode");
/*
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseEvenElements(head) {
    if (!head) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;

    while (current !== null) {
        if (current.val % 2 === 0) {
            let start = current;
            while (current !== null && current.val % 2 === 0) {
                current = current.next;
            }
            let end = current;
            prev.next = reverseList(start, end);
            prev = start;
        } else {
            prev = current;
            current = current.next;
        }
    }

    return dummy.next;
}

/**
 * Reverse the sublist starting from `start` up to (but not including) `end`.
 * @param {ListNode} start
 * @param {ListNode} end
 * @return {ListNode}
 */
function reverseList(start, end) {
    let prev = end;
    let current = start;

    while (current !== end) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

module.exports = reverseEvenElements;

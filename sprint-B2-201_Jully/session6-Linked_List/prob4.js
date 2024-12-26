// Problem Description
// Given 2 sorted linked lists, merge them into a new sorted linked list and return head of the merged list. The new list should be made by splicing (adjusting the pointers) together the nodes of the first two lists.

// Input format
// N - An integer denoting the number of nodes in the linked list.

// N integers follow where ith integer denotes the ith node value in the linked list

// M - An integer denoting the number of nodes in the linked list.

// M integers follow where jth integer denotes the jth node value in the linked list

// Output format
// Return the sorted list after splicing the nodes of the first two lists.

// Constraints
// 0 <= N <= 10^5

// -10^9 <= value <= 10^9

// 0 <= M <= 10^5

// -10^9 <= value <= 10^9

// Sample Input 1
// 3

// 1 2 4

// 3

// 1 3 4

// Sample Output 1
// 1 1 2 3 4 4

// Explanation 1
// Merging the input lists and keeping the new list sorted results in this.

// Sample Input 2
// 4

// 1 5 7 6

// 1

// 3

// Sample Output 2
// 1 3 5 7 6

// Explanation 2
// Merging the input lists and keeping the new list sorted results in this.

const ListNode = require("../crio/javascript/ds/ListNode/ListNode");
/*
class ListNode{
      constructor(val){
            this.val = val;
            this.next = null;
      }
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
      if (l1 == null) return l2;
      if (l2 == null) return l1;

      if (l1.val < l2.val) { // Assuming you meant to compare the val property
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;

      } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
      }
}

module.exports = mergeTwoLists;

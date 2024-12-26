// Problem Description
// You’re given two numbers represented by two linked lists, where each node contains a single digit. The digits are stored in forward order i.e the one’s digit is at the tail of the list. Write a function that adds the two numbers and returns the sum as a linked list in the same order.

// Input format
// There are 4 lines of input.

// First line contains N, the size of the first list

// Next line contains N space separated integers

// Third line contains M, the size of the second list

// Next line contains M space separated integers

// Output format
// Return the resultant list after adding given lists.

// Function definition
// The given function accepts two arguments - representing the heads of the two lists,and returns the new head.

// Constraints
// 1 <= N <= 1e5

// 1 <= M <= 1e5

// 0 <= value <= 9

// Sample Input 1
// 3

// 6 1 7

// 3

// 2 9 5

// Sample Output 1
// 9 1 2

// Explanation 1
// 617 + 295 = 912.

// Sample Input 2
// 2

// 4 9

// 1

// 5

// Sample Output 2
// 5 4

// Explanation 2
// 49 + 5 = 54.


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function addLinkedLists(head1, head2) {
    // Reverse both linked lists
    let reversed1 = reverseLinkedList(head1);
    let reversed2 = reverseLinkedList(head2);
    
    let dummyHead = new ListNode(0);
    let current1 = reversed1;
    let current2 = reversed2;
    let currentResult = dummyHead;
    let carry = 0;
    
    while (current1 !== null || current2 !== null || carry !== 0) {
        let val1 = current1 !== null ? current1.val : 0;
        let val2 = current2 !== null ? current2.val : 0;
        
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;
        
        // Add new node with digit at the front of the resultant list
        let newNode = new ListNode(digit);
        currentResult.next = newNode;
        currentResult = newNode;
        
        // Move to the next nodes in reversed1 and reversed2
        if (current1 !== null) current1 = current1.next;
        if (current2 !== null) current2 = current2.next;
    }
    
    // Reverse the resultant list to get the final result
    let result = reverseLinkedList(dummyHead.next);
    return result;
}

// Helper function to reverse a linked list
function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}

// Example usage:
// Constructing the input linked lists
function createLinkedList(nums) {
    if (!nums || nums.length === 0) return null;
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of nums) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummyHead.next;
}

// Example usage with the given sample input format
function exampleUsage() {
    // Sample Input 1
    let nums1 = [6, 1, 7];
    let nums2 = [2, 9, 5];
    
    let head1 = createLinkedList(nums1);
    let head2 = createLinkedList(nums2);
    
    let result = addLinkedLists(head1, head2);
    
    // Printing the result in the specified output format
    let resultList = [];
    let current = result;
    while (current !== null) {
        resultList.push(current.val);
        current = current.next;
    }
    console.log(resultList.join(' ')); // Output: 9 1 2
}

exampleUsage();

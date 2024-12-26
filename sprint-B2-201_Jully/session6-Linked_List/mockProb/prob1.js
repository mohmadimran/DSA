// Problem Description
// You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the highest order digit is at the head of the list.

// Write a function that adds the two numbers and returns the sum as a linked list.

// Input format:
// First line contains N, number of elements in the first linked list.

// Next line contains N space separated integers, elements of that linked list.

// First line contains M, number of elements in the second linked list.

// Next line contains M space separated integers, elements of that linked list.

// Output format
// Print the sum of the given numbers.

// Sample Input 1
// 3

// 7 1 6

// 3

// 5 9 2

// Sample Output 1
// 2 1 9

// Explanation
// 617 + 295 = 912

// Sample Input 2
// 2

// 4 9

// 2

// 0 5

// Sample Output 2
// 4 4 1

// Explanation
// 94 + 50 = 144

// Sample Input 3
// 2

// 1 0

// 1

// 2

// Sample Output 3
// 3 0

// Explanation
// That is, 01 + 2 = 03. Note that we retain the preceding 0 as well.

// Constraints
// 1 <= M, N <= 10^5


function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // A dummy node to simplify edge cases
    let current = dummyHead; // Pointer to build the result linked list
    let carry = 0; // Initialize carry to handle sums greater than 9

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0; // If l1 is not null, use its value, otherwise use 0
        let y = (l2 !== null) ? l2.val : 0; // If l2 is not null, use its value, otherwise use 0
        let sum = carry + x + y; // Calculate the sum of the two digits plus the carry
        carry = Math.floor(sum / 10); // Update carry (if sum is 10 or more, carry will be 1)
        current.next = new ListNode(sum % 10); // Create a new node with the remainder of sum divided by 10
        current = current.next; // Move the current pointer

        if (l1 !== null) l1 = l1.next; // Move to the next node in l1
        if (l2 !== null) l2 = l2.next; // Move to the next node in l2
    }

    if (carry > 0) { // If there is any carry left at the end, add a new node
        current.next = new ListNode(carry);
    }

    return dummyHead.next; // Return the next node of dummyHead, which is the start of the result linked list
}

// Problem Description
// There are 2 LLs, and they intersect at a node N, after which they merge into 1 list.

// Write a program to find the node at which the intersection of two singly linked lists begins.

// Note :

// If the two linked lists have no intersection at all, return null.

// The linked lists must retain their original structure after the function returns.

// You may assume there are no cycles anywhere in the entire linked structure.

// Your code should preferably run in O(M + N) time where M and N are the lengths of given lists and use only O(1) memory.

// Input format
// There are 6 lines of input.

// First line contains N - An integer denoting the number of elements before the intersection point in the first list.

// Next line contains N integers representing the node values of the first LL before the intersection point.

// Next line contains M - An integer denoting the number of elements before the intersection point in the second list.

// M integers follow where jth integer denotes the jth node value in the linked list.

// Next line contains P - An integer denoting the number of elements after the intersection point.

// Next line contains P integers - the node values after and including the intersection point of the LL.


// Note that the input accepts all these values, but you’ll have access only to the two heads, which you’ll have to make use of.

// Output format
// Return the intersection node of the lists.

// Function Definition
// You have to complete the given function. It accepts two arguments - the heads of each LL. You have to return a pointer to the intersection node of the two LLs.

// Constraints
// 0 <= N <= 10^5

// -10^9 <= value <= 10^9

// 0 <= M <= 10^5

// -10^9 <= value <= 10^9

// 0 <= P <= 10^5

// -10^9 <= value <= 10^9

// Sample Input 1
// 3

// 3 1 7

// 2

// 2 6

// 3

// 9 15 7

// Sample Output 1
// 9

// Explanation 1
// image

// The value of the element at the intersection point of the two lists is 9.

// Sample Input 2
// 5

// 1 2 3 4 5

// 5

// 6 7 8 9 10

// 0

// Sample Output 2
// Null

// Explanation 2
// The two lists don’t intersect, return Null.

function listIntersectionPoint(head1, head2) {
    if (head1 === null || head2 === null) {
        return null;
    }
    let length1 = 0;
    let length2 = 0;
    let current1 = head1;
    let current2 = head2;
    while (current1 !== null) {
        length1++;
        current1 = current1.next;
    }
    while (current2 !== null) {
        length2++;
        current2 = current2.next;
    }
    let diff = Math.abs(length1 - length2);
    current1 = head1;
    current2 = head2;
    if (length1 > length2) {
        for (let i = 0; i < diff; i++) {
            current1 = current1.next;
        }
    } else {
        for (let i = 0; i < diff; i++) {
            current2 = current2.next;
        }
    }
    while (current1 !== null && current2 !== null) {
        if (current1 === current2) {
            return current1;
        }
        current1 = current1.next;
        current2 = current2.next;
    }
    return null;
}

module.exports = listIntersectionPoint;

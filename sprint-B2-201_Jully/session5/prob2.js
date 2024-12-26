// Problem Description
// Given a linked list and an integer X, partition the LL around X, such that all nodes less than X come before all nodes greater than X. If X is contained within the list, then those nodes need

// to be after the elements less than X and before the elements greater than X, i.e. they should appear between the left and right partitions.


// You can also see if you can preserve the order for elements on either side of the partition. For instance, for given LL 2, 6, 5, 7, 1 and X = 5, the answer should be 2, 1, 5, 6, 7 only, instead of 1, 2, 5, 6, 7.

// Input format
// N - An integer denoting the number of nodes in the linked list.

// N integers follow where ith integer denotes the ith node value in the linked list

// X - An integer denoting the value that you must use to partition the given list

// Output format
// Return the head after partitioning the list

// Constraints
// 1 <= N <= 10^5

// -10^9 <= value, X <= 10^9

// Sample Input 1
// 7

// 3 5 8 5 10 2 1

// 5

// Sample Output 1
// 3 2 1 5 5 8 10

// Explanation 1
// The nodes [3], [1] and [2] are less than [5] so they are present before [8] and [10].

// There are also other possible answers for the same input.

// Sample Input 2
// 5

// 3 1 3 1 4

// 2

// Sample Output 2
// 1 1 4 3 3

// Explanation 2
// All nodes with values less than 2 come before all nodes with values greater than 2.
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let dummyNode = new ListNode(-1);
        this.head = dummyNode;
        this.tail = dummyNode;
    }
    addNode(node) {
        this.tail.next = node;
        this.tail = node;
    }
}

function partition(head, x) {
    let less = new LinkedList();
    let equal = new LinkedList();
    let great = new LinkedList();
    let cur = head;
    
    while (cur != null) {
        let next = cur.next;  // Store next node
        cur.next = null;  // Break link to prevent cycles
        if (cur.val < x) {
            less.addNode(cur);
        } else if (cur.val == x) {
            equal.addNode(cur);
        } else {
            great.addNode(cur);
        }
        cur = next;
    }
    
    // Combine the lists only if they are not empty
    if (equal.head.next !== null) {
        equal.tail.next = great.head.next;
    } else {
        less.tail.next = great.head.next;
    }
    
    if (less.head.next !== null) {
        less.tail.next = equal.head.next !== null ? equal.head.next : great.head.next;
    }
    
    return less.head.next !== null ? less.head.next : (equal.head.next !== null ? equal.head.next : great.head.next);
}

// Example usage:
let node1 = new ListNode(1);
let node2 = new ListNode(4);
let node3 = new ListNode(3);
let node4 = new ListNode(2);
let node5 = new ListNode(5);
let node6 = new ListNode(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

let partitionedHead = partition(node1, 3);

// Print the partitioned list
let current = partitionedHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}

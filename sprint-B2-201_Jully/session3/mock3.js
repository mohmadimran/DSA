// Problem Description
// Given an array, print the next smaller element for every element. The next smaller element for an element x is the first smaller element on the right side of x in the array. Elements for which no next smaller element exists, consider it as -1.

// Input format
// First line contains an integer N - The size of the array.

// Second line contains N space separated integers - The given array.

// Output format
// Print in a single line, the next smaller element for each array element separated by space.

// Sample Input 1
// 5

// 8 2 5 10 4

// Sample Output 1
// 2 -1 4 4 -1

// Explanation
// In the given array, next smaller element to 8 is 2 and for 5 & 10 it is 4. For 2 and 4 the next smaller element does not exist so the final ans is [2, -1, 4, 4, -1].

// Constraints
// 1 <= N <= 10^5

// 0 <= A[i] <= 10^9

function nextSmallerElements(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    const stack = [];
    
    // Iterate from right to left
    for (let i = n - 1; i >= 0; i--) {
        // Maintain elements in increasing order in stack
        while (stack.length && stack[stack.length - 1] >= arr[i]) {
            stack.pop();
        }
        // If stack is not empty, the top element is the next smaller element
        if (stack.length) {
            result[i] = stack[stack.length - 1];
        }
        // Push the current element onto the stack
        stack.push(arr[i]);
    }
    
    return result;
}

// Example usage:
const input = [8, 2, 5, 10, 4];
const output = nextSmallerElements(input);
console.log(output.join(' ')); // Output: 2 -1 4 4 -1

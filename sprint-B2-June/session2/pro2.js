// Problem Description
// Given an array, find a non-empty contiguous subarray with the largest sum.

// Input format
// There are 2 lines of input.

// First line contains N, the number of elements in the array.

// Second line contains N space separated numbers, representing the array elements.

// Output format
// A single integer which is the maximum possible contiguous subarray sum

// Constraints
// 1 ≤ N ≤ 10^5

// -10^9 ≤ A[i] ≤ 10^9

// Sample Input 1
// 8

// -2 -3 4 -1 -2 1 5 -3

// Sample Output 1
// 7

// Explanation 1
// The subarray [4 -1 -2 1 5] has sum 7, which is the maximum possible.
// The contiguousSequence function aims to find the maximum sum of a contiguous subarray within a given array arr of size n. This algorithm is an implementation of Kadane's Algorithm.

function contigiousSequence(n, arr) {
// -2 -3 4 -1 -2 1 5 -3
    let maxSum = - Infinity ;
    let sum = 0 ;
    for(let i = 0; i < n ; i++){
        sum += arr[i] ;
       
        if(sum > maxSum){
            maxSum = sum ;
         
        }
        if(sum < 0){
            sum = 0 ;
           
            
        }
    }
    return maxSum;
    
    }
//     Step-by-Step Iteration with Explanation
// Let's go through each iteration in detail using the array [-2, -3, 4, -1, -2, 1, 5, -3].

// Initial State
// maxSum = -Infinity
// sum = 0
// Iteration Details
// Iteration 1 (i = 0)

// arr[0] = -2
// sum = sum + arr[0] = 0 + (-2) = -2
// Check if sum > maxSum:
// sum (-2) is greater than maxSum (-Infinity), so update maxSum = -2
// Check if sum < 0:
// sum (-2) is less than 0, so reset sum = 0
// State after iteration: maxSum = -2, sum = 0
// Iteration 2 (i = 1)

// arr[1] = -3
// sum = sum + arr[1] = 0 + (-3) = -3
// Check if sum > maxSum:
// sum (-3) is not greater than maxSum (-2), so maxSum remains -2
// Check if sum < 0:
// sum (-3) is less than 0, so reset sum = 0
// State after iteration: maxSum = -2, sum = 0
// Iteration 3 (i = 2)

// arr[2] = 4
// sum = sum + arr[2] = 0 + 4 = 4
// Check if sum > maxSum:
// sum (4) is greater than maxSum (-2), so update maxSum = 4
// Check if sum < 0:
// sum (4) is not less than 0, so sum remains 4
// State after iteration: maxSum = 4, sum = 4
// Iteration 4 (i = 3)

// arr[3] = -1
// sum = sum + arr[3] = 4 + (-1) = 3
// Check if sum > maxSum:
// sum (3) is not greater than maxSum (4), so maxSum remains 4
// Check if sum < 0:
// sum (3) is not less than 0, so sum remains 3
// State after iteration: maxSum = 4, sum = 3
// Iteration 5 (i = 4)

// arr[4] = -2
// sum = sum + arr[4] = 3 + (-2) = 1
// Check if sum > maxSum:
// sum (1) is not greater than maxSum (4), so maxSum remains 4
// Check if sum < 0:
// sum (1) is not less than 0, so sum remains 1
// State after iteration: maxSum = 4, sum = 1
// Iteration 6 (i = 5)

// arr[5] = 1
// sum = sum + arr[5] = 1 + 1 = 2
// Check if sum > maxSum:
// sum (2) is not greater than maxSum (4), so maxSum remains 4
// Check if sum < 0:
// sum (2) is not less than 0, so sum remains 2
// State after iteration: maxSum = 4, sum = 2
// Iteration 7 (i = 6)

// arr[6] = 5
// sum = sum + arr[6] = 2 + 5 = 7
// Check if sum > maxSum:
// sum (7) is greater than maxSum (4), so update maxSum = 7
// Check if sum < 0:
// sum (7) is not less than 0, so sum remains 7
// State after iteration: maxSum = 7, sum = 7
// Iteration 8 (i = 7)

// arr[7] = -3
// sum = sum + arr[7] = 7 + (-3) = 4
// Check if sum > maxSum:
// sum (4) is not greater than maxSum (7), so maxSum remains 7
// Check if sum < 0:
// sum (4) is not less than 0, so sum remains 4
// State after iteration: maxSum = 7, sum = 4
// Final State
// After completing all iterations of the loop:

// maxSum holds the value 7, which is the maximum sum of a contiguous subarray in the given array.
// Summary
// Time Complexity: O(n), where n is the number of elements in the array.
// Space Complexity: O(1), constant space usage.
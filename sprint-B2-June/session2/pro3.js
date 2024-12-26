function maximumSubarraySumSizeK(N,A,K) {
    // 100 200 300 400
    // k=2, N=4
    let sum = 0;
    for(let i = 0; i <= K-1; i++)
    {
        sum += A[i];
    }
    let max = sum ;
    for(let j = K ; j <= N-1; j++)
    {
        sum += A[j];
        sum -= A[j - K];
        if(sum > max)
        {
            max = sum;
        }
    }
    return max;
}
// Problem Description
// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// Input format
// First line of input contains two integers N and K, where N is the size of the array and K is the subarray size.

// Second line of input contains N integers denoting the array elements.

// Output format
// Print the maximum sum of a subarray of size k.

// Sample Input 1
// 4 2

// 100 200 300 400

// Sample Output 1
// 700

// Explanation
// We get maximum sum by adding subarray {300,400}

// of size 2.

// Constraints
// 1<=K<=N<=100000

// 0<=abs(arr[i])<=10000
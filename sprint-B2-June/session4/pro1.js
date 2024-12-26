// Problem Description
// Given an unsorted array, sort it in wave form. That is, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

// Input format
// There are 2 lines of input.

// First line contains an integer N ,the number of input integers in the array.

// Second line contains N space separated integers.

// Output format
// N space separated elements which satisfy the given condition.

// Sample Input 1
// 6

// 1 5 1 1 6 4

// Sample Output 1
// 1 4 1 5 1 6

// Explanation 1
// nums[0] <= nums[1] >= nums[2] <= nums[3] >= nums[4] <= nums[5].

// Constraints
// 1 <= N <= 100000

// -10^9 <= A[i] <= 10^9

function wiggleSort(arr, n) {
    for(let i = 1; i < n; i += 2)
    {
        if(i-1 >= 0  && arr[i-1] > arr[i])
        {
            [arr[i-1],arr[i]] = [arr[i],arr[i-1]];
        }
        if(i + 1 < n && arr[i+1] > arr[i])
        {
            [arr[i],arr[i + 1]] = [arr[i + 1],arr[i]];
        }
    }
    return arr;
}

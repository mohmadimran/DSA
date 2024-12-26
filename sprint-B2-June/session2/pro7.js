// Given an integer array, find the largest subarray with sum 0 . If there is more than one subarray with the largest length, return the subarray with the lowest starting index.

// If there is no such sub-array print -1.

// Input format
// There are 2 lines of input.

// First line contains an integer N.

// Next line consists of N integers, the values of the array.

// Output format
// Print the elements of the sub-array with spaces which have the largest length and sum of elements equal to zero.

// Sample Input 1
// 6

// 2 3 1 -4 0 6

// Sample Output 1
// 3 1 -4 0

// Explanation
// The largest subarray with sum zero is (3, 1, -4, 0)

// Constraints
// 1 <= N <= 10^5

// -10^4 <= arr[i] <= 10^4
function largestSubarraySumZero(n, arr) {

    const store = new Map();

    store.set(0,-1);
    let sum = 0 ;
    let ansLeft = -1; let ansRight = -2;

    for(let right = 0; right < n ; right++)
    {
        sum += arr[right];

        if(store.has(sum))
        {
            let left = store.get(sum) + 1 ;
            if(right - left + 1 > ansRight - ansLeft + 1)
            {
                ansRight = right ;
                ansLeft = left ;
            }
        } else{
            store.set(sum,right)
        }
    }
    if(ansLeft != -1)
    {
        const res = arr.slice(ansLeft,ansRight + 1);
        return res;
    }
    return [-1] ;
}
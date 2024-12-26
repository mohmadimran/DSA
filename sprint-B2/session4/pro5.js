// Problem Description
// Given an array of n integers. Your task is to sort the array in ascending order using merge sort technique.
// Return the sorted array.
// Note :- You need to sort array only using merge sort.

// Input format
// First line contains a single integer n - the number of elements present in the array.
// Second line contains n space separated integers.

// Output format
// Print n space separated integers in sorted order or simply return a sorted array.

// Sample Input 1
// 5
// 12 8 3 0 7

// Sample Output 1
// 0 3 7 8 12

// Explanation
// Applying Merge Sort to the array [12, 8, 3, 0, 7] involves dividing it into two halves: [12, 8] and [3, 0, 7]. Recursively sorting each half results in [8, 12] and [0, 3, 7].
// The final step merges these sorted halves, creating the sorted array [0, 3, 7, 8, 12].

// Constraints
// 1 <= n <= 10^5
// 0 <= a[i] <= 10^9

function merge(A,B){
    const n = A.length; let m = B.length;
    let i = 0; let j = 0; let C = [];
    while( i < n && j < m)
    {
        if(A[i] <= B[j])
        {
            C.push(A[i++]);
        }else{
            C.push(B[j++]);
        }
    }
    while(i < n){
        C.push(A[i++]);
    }
    while(j < m){
        C.push(B[j++]);
    }
    return C ;
}


function mergeSort(n, arr) {
    // 5
// 12 8 3 0 7
    if(n <= 1) return arr;
    const mid = Math.floor(n/2);
    // mid = 2;
    const left = mergeSort(mid,arr.slice(0,mid));
//first call, left [12,8]
// second call left is [12] and right is [8];
    const right = mergeSort(n - mid, arr.slice(mid));
    // left [3,0,7]
    // first call left is 3 and right is [0,7]
    return merge(left,right);
}
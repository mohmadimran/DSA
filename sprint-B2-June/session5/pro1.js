// // Problem Description
// // You are given an array arr. You need to sort the array arr using quick sort.
// // Note :- You should sort the array arr using quick sort only.

// // Input format
// // First line will contain a single integer N.
// // Second line will contain N space separated integers representing array elements.

// // Output format
// // Output the array space separated in a single line or simply return a sorted array.

// // Sample Input 1
// // 5 4 3 1 2 5

// // Sample Output 1
// // 1 2 3 4 5

// // Explanation
// // Taking an array like [5, 4, 3, 1, 2], Quick Sort begins by choosing a pivot, often the last element, and partitions the array by rearranging elements on either side of the pivot.
// // Recursive calls are then applied to the subarrays. For instance, in the given array, the pivot 2 is chosen, leading to the partitioned array [1, 2, 3, 5, 4].
// // Further recursive calls and pivot selections result in a sorted array [1, 2, 3, 4, 5].

// // Constraints
// // 1 <= N <= 100000

// let arr = [5,4,3,1,2];
// let n = 5;
// let low = 0;
// let high = n-1;
// function partition(arr, low, high) {
//     const pivot = arr[high];
//     let j = low;
//     for (let i = low; i < high; i++) {
//         if (arr[i] <= pivot) {
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//             j++;
//         }
//     }
//     [arr[j], arr[high]] = [arr[high], arr[j]];
//     return j;
// }


// function quickSort(arr, low, high) {
//     if (low >= high) return arr;
//     const j = partition(arr, low, high);
//     quickSort(arr, low, j - 1);
//     quickSort(arr, j + 1, high);
//     return arr;
// }
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
    if(n <= 1) return arr;
    const mid = Math.floor(n/2);
    const left = mergeSort(mid,arr.slice(0,mid));
    const right = mergeSort(n - mid, arr.slice(mid));
    return merge(left,right);
}
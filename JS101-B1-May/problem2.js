// Problem Description
// Given a sorted array of N distinct integers and a target value X, return the index if the target is found. If not found then return -1.

// Note - Try implementing with O(logN) runtime complexity.

// Input format
// First line contains integers N, the number of distinct integers, and X, the target value. Second line contains N space separated integers.

// Output format
// Print the index of the target element if found else return -1.

// Sample Input 1
// 5 7 1 3 5 7 13

// Sample Output 1
// 3

// Explanation
// Target integer 7 is at index 3.

// Sample Input 2
// 5 8 1 3 5 7 13

// Sample Output 2
// -1

// Explanation
// Target integer 8 is not present.

// Constraints
// 1 <= N <= 10^3 1 <= A[i] <= 10^9

// find element in array by binary search

let arr = [1,3,4,5,6];
let find = 5;
function findNum(arr,find){
  let left = 0;
  let right = arr.length-1;
  while(left <= right){
    let mid = Math.floor((left+right)/2);
    if(arr[mid] === find){
      return true;
    }
    if(arr[mid] < find){
      left = mid +1;
    }
    else{
      right = mid -1;
    }
  }
  return -1;
}
console.log(findNum(arr,find))
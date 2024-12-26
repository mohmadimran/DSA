// Problem Description
// Partitioning an array means to split an array along an element, such that it divides the array into two parts with some specific property. The element that partitions the array is called the partitioning element.

// Given an array, find the element, partitioning along which, the sum of elements to its left, equals the sum of elements to its right. The partition element itself is to be excluded from both sums.

// Return the index of the partitioning element. If no such element exists, return -1.

// Input format
// There are N+1 lines of input.

// First line will contain a single integer N.

// Second line will contain n space separated integer representing array elements.

// Output format
// Output the index of the partitioning element.

// Constraints
// 2 <= N <= 10^6

// 1 <= Arr[i] <= 10^9

// Sample Input 1
// 4

// 1 4 2 5

// Sample Output 1
// 2

// Explanation 1
// Since 1 + 4 = 5 where 2 is such an element.

function equalPartition(n, arr) {
  // arr=[1,4,2,5]

  // initialize the variable
  let val = [];
  let sum = 0;

  // calculate the sum of prifix array
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    // sum = 1,5,7,12
    val.push(sum);
    // val= [1,5,7,12]
  }

  for (let i = 1; i < n - 1; i++) {
    let leftSum = val[i - 1];
    // leftsum = val[1 - 1]= index 0 = 1;
    // leftsum = val[2 - 1]=index 1 = 5;
    // leftsum = val[3 - 1]= index 2 = 7;

    // calculate the sum of sufix Array

    let rightSum = val[n - 1] - val[i];
    // rightSum = val[4 -1] - val[1] = val[3] - val[1] = 12 - 5 = 7
    // rightSum = val[4 -1] - val[2] = val[3] - val[2] = 12 - 7 = 5
    // rightSum = val[4 -1] - val[3] = val[3] - val[3] = 12 - 12 = 0

    if (leftSum === rightSum) {

      // leftSum === rightSum

      //first itration[1] 1 === 7
      //second itration[2] 5 === 5
      return i;
      // return i= 2
    }
  }
  return -1;
}
// rsult is 2

// Q .1. The function aims to find the two largest elements in an array and then return the product of their values decremented by one. Here’s a detailed step-by-step analysis:

// Problem Description
// Given the array of integers nums of size n, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Input format
// First line contains n, the number of distinct integers.

// Second line contains n space separated integers

// Output format
// Print the maximum product.

// Sample Input 1
// 4

// 3 4 5 2

// Sample Output 1
// 12

// Explanation
// If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)(nums[2]-1) = (4-1)(5-1) = 3*4 = 12.

// Sample Input 2
// 4

// 1 5 4 5

// Sample Output 2
// 16

// Explanation
// Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

// Constraints
// 2 <= n <= 500
// 1 <= nums[i] <= 10^3

// first solution
//  function maxProduct2(nums) {
//     let max = 1;
//     let secondMax = -1 ;
//     for(const element of nums){
//         if(element >= max){
//             secondMax = max ;
//             max = element;
//         }
//         else if(element >= secondMax){
//             secondMax = element;
//         }
//     }
//     return(max -1)*(secondMax-1);
// }

// second solution
function maxProduct2(n, nums) {
    let max = 1;
    let secondMax = -1;
    let i = 0;

    while (i < n) {
        let element = nums[i];
        if (element >= max) {
            secondMax = max;
            max = element;
        } else if (element >= secondMax) {
            secondMax = element;
        }
        i++;
    }

    return (max - 1) * (secondMax - 1);
}

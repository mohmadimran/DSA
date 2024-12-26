// n a land of integers, a challenge arises. You have an array, and you must create another array of the same length. Each element in this new array depends on the difference between the sum of elements to its left and the sum of elements to its right. If there are no elements to the left or right, consider it as 0. Solve the challenge and return the new array as your answer.

// Note: answer.length == nums.length.

// answer[i] = |leftSum[i] - rightSum[i]|.

// Input format
// First line contains one number denoting the number of integers in the array

// Next line contains N numbers denoting the ith element of the array

// Output format
// A single line containing the elements of the required array.

// Sample Input 1
// 5

// 1 2 3 4 10

// Sample Output 1
// 19 16 11 4 10

// Explanation
// For each element in the array, we calculate the difference between the sum of elements to its left and the sum of elements to its right:

// For the first element 1, we have | 0 - 19 | = 19.

// For the second element 2, we have | 1 - 17 | = 16.

// For the third element 3, we have | 3 - 14 | = 11.

// For the fourth element 4, we have | 6 - 10 | = 4.

// For the fifth element 10, we have | 10 - 0 | = 10.

// The resulting output array is [19, 16, 11, 4, 10].

// Constraints
// 1 <= nums.length <= 100000

function leftAndRight(nums) {
    const result = new Array(nums.length);
    let prifixSum = 0;
    let totalsum = 0 ;
    for(let i= 0; i < nums.length; i++){
        totalsum += nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalsum - prifixSum - nums[i];
        let leftSum = prifixSum;
        result[i] = Math.abs(leftSum - rightSum);
        prifixSum += nums[i];
    }
    return result;

}

// -10^5 <= nums[i] <= 10^5




// Problem Description
// Given an array of integers, sort the array based on the absolute value of the elements.

// Input format
// First line contains an integer n - The number of elements.

// Second line contains n space separated integers - The array nums.

// Output format
// For each test case print the minimum changes required on a separate line.

// Sample Input 1
// 5

// 2 -5 1 -2 4

// Sample Output 1
// 1 2 -2 4 -5

// Explanation 1
// Absolute values of elements are [2,5,1,2,4] respectively, so in the sorted order based on absolute values elements will be [1,2,-2,4,-5] or [1,-2,2,4,-5]. Both are accepted answers.

// Constraints
// 1 <= n <= 10^5

// -10^9 <= nums[i] <= 10^9
function sortArrayAbsolute(n, nums) {
    let num = nums.map(value => value);

    num.sort((a,b)=>{
        if(Math.abs(a) < Math.abs(b))
        {
            return -1;
        }
        if(Math.abs(a) > Math.abs(b))
        {
            return +1;
        }else{
            return 0 ;
        }
    });
    for(let i = 0; i < n; i++)
    {
        nums[i] = num[i];
    }
    return nums;
}

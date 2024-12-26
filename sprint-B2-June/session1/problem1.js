// Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the target. Return true if such a pair can be found, and false otherwise.

// Input format
// There are 3 lines of input.

// First line contains an Integer N that represents the number of elements in the array.

// Second line contains N space separated integers, which are members of the array.

// Third line contains an integer X, which is the target value.

// Output format
// Print "Present" if there is such a pair present in the array otherwise print "Not Present".

// Constraints
// 2 <= Length of array <= 10^5

// 1 <= Range of values <= 10^6

// Sample Input 1
// 5 --> Number of elements in array

// 2 4 5 8 9 --> Array elements

// 7 --> Target sum value

// Sample Output 1
// Present

// Explanation 1
// Since 0 and 2 are the indices where the numbers 2 and 5 which add up to 7 are seen

// Resource
// Given an array A[] and a number x, check for pair in A[] with sum as x

// Video : Target Sum Pair

// Crio Methodology - Problem Approach
// Brainstorm some approaches for solving the problem before viewing the video

// image

// Crio Methodology - Problem Coding
// Try coding on your own before checking the below video

// Java Implementation:

// image

// Javascript Implementation:

// image


// Checklist

// What is the brute force approach?


// How can the above approach be improved?


// What is the TC/SC of the above approach?

// Follow up

// What if the array was not sorted?


// More about this problem

function twoSumInSortedArray(n, arr, target_sum) {
    let left = 0; let right = n-1;

    while(left < right)
    {
        let sum = arr[left] + arr[right]
       if( sum === target_sum){
           return true;
       }
       else if(sum < target_sum){
       left++;
       }
       else{
               right-- ;

       }
    }
    return false;

}
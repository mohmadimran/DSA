// Problem Description
// Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Input format
// A 32 bit integer N

// Output format
// A single integer

// Sample Input 1
// 12

// Sample Output 1
// 21

// Explanation
// There is only one number greater than 12 which is composed of 2 and 1 and it is 21.

// Constraints
// 0<= N <= 10^9
function reverseFun(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function nextGreaterElementWithSameSetOfDigits(n) {
    let digits = n.toString().split("");
    let i = digits.length - 2;
    while (i >= 0) { // Changed condition to i >= 0
        if (digits[i] < digits[i + 1]) {
            break;
        }
        i--;
    }
    if (i < 0) { // Changed condition to i < 0
        return -1;
    }
    let j = digits.length - 1;
    while (j > i) { // Changed condition to j > i
        if (digits[j] > digits[i]) {
            break;
        }
        j--;
    }
    [digits[i], digits[j]] = [digits[j], digits[i]];
    reverseFun(digits, i + 1, digits.length - 1);
    return parseInt(digits.join(''));
}

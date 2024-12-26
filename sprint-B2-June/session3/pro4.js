// Problem Description
// You are given a string, you have to rearrange the characters of the string using a given permutation.

// The permutation is in the form of an integer array with size same as that of string in which each integer specifies the new position of the character currently present at that particular place.

// For eg. consider the string "abcd" and permutation [2,4,3,1], then the new string will be "dacb".

// Input format
// First line contains an integer n - The length of string.

// Second line contains a string - The given string

// Third line contains n space separated integers - The permutation.

// Output format
// Print the new string after applying the permutation.

// Sample Input 1
// 4

// abcd

// 2 4 3 1

// Sample Output 1
// dacb

// Explanation
// According to the permutation 'a' goes to position 2, 'b' to 4, 'c' to 3, 'd' to 1. So we get the new string as "dacb".

// Constraints
// 0 < n < 100

// 1 <= array elements <= n

function stringPermutation(n, s, arr) {
    let result = new Array(n).fill('');
    for(let i = 0; i < n ; i++)
    {
        let char = s.charAt(i);
        let index = arr[i] - 1;
        result[index] = char;
    }
    return result.join("");
}
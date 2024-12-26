// Problem Description
// You are given a string consisting of lower and upper case characters.
// You need to find the length of the longest palindrome which you can create by using the characters from the string.
// Note: Upper case and lower case characters are different from each other i.e, "Aa" is not a palindrome as 'A' != 'a'.

// Input format
// There are 2 lines of input

// First line contains the size of the string

// Second line contains the string.

// Output format
// Print the length of the longest palindrome possible.

// Sample Input 1
// 4 bbde

// Sample Output 1
// 3

// Explanation
// The possible 3 size palindrome strings are :- beb and bdb

// Constraints
// 1 <= Size of String <= 10^4
function longestPalindrome(n, str) {
    let stor = new Map();
    for(let i = 0; i < n ; i++)
    {
        stor.set(str[i],(stor.get(str[i]) || 0) +1);
    }
    let length = 0 ;
    let isOdd = false;
    for(let [key,count] of stor.entries())
    {
        if(count % 2 == 0)
        {
            length += count ;
        }
        else{
            length += (count - 1);
            isOdd = true ;
        }
    }
    if(isOdd){
        length += 1;
    }
    return length ;
}
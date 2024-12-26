// Problem Description
// Given a string, find the length of the longest substring which has no repeating characters.

// Input format
// Input is a string.

// Output format
// Output is an integer representing the longest substring with no repeating characters.

// Sample Input 1
// aabcccbcb

// Sample Output 1
// 3

// Explanation 1
// "abc" is the longest substring with no repeating characters.

// Sample Input 2
// cdddddd

// Sample Output 2
// 2

// Explanation 2
// "cd" is the longest substring with no repeating characters.
function longestSubstringWithoutRepeatingCharacter(s) {
    let stor = new Map();
    let left = 0;
    let result = 0;

    for(let right = 0; right < s.length ; right++)
    {
        let prev = stor.get(s[right]);
        if(prev !== undefined && prev >= left)
        {
            left = prev + 1;
        }
        stor.set(s[right], right)
        result = Math.max(result, right -left + 1);
    }
    return result;
}

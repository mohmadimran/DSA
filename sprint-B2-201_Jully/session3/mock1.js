// Problem Description
// You are given two strings and an integer k,find whether the given two strings are similar or not. Two given strings s1 and s2 are similar if for each character the difference between the frequency of that character in s1 and s2 is at most k. If the given strings are similar then print Yes otherwise print No. (Note : Both strings s1 and s2 are in lowercase )

// Input format
// First line contains an integer T - Number of test cases.

// The first line of each test case contains three integers N, M and K where N is the length of the first string, M is the length of the second string.

// The second line of each test case contains a string s1.

// The third line of each test case contains a string s2.

// Output format
// For each test case, print Yes if the given strings are Similar or No if the given strings are not similar.

// Sample Input 1
// 2

// 5 3 2

// aaabc

// abc

// 12 3 3

// xyzzzbbbbbxx

// bxy

// Sample Output 1
// Yes

// No

// Explanation
// In the first test case, the difference between each and every characters frequency in both the strings is at most 2. Hence, they are similar strings.

// In the second test case, the difference between the frequency of letter b in first string and the frequency of letter b in second string is 4. Hence, they are not similar strings.

// Constraints
// 1 <= T <= 100

// 1 <= N,M <= 100000

function similarString(n, s1, m, s2, k) {
    // Frequency map for s1
    const freq1 = new Map();
    for (let char of s1) {
        freq1.set(char, (freq1.get(char) || 0) + 1);
    }

    // Frequency map for s2
    const freq2 = new Map();
    for (let char of s2) {
        freq2.set(char, (freq2.get(char) || 0) + 1);
    }

    // Check frequencies
    let isSimilar = true;
    const allChars = new Set([...freq1.keys(), ...freq2.keys()]);

    for (let char of allChars) {
        const count1 = freq1.get(char) || 0;
        const count2 = freq2.get(char) || 0;
        if (Math.abs(count1 - count2) > k) {
            isSimilar = false;
            break;
        }
    }

    return isSimilar ? "Yes" : "No";
}

// Example usage:
console.log(similarString(5, "aaabc", 3, "abc", 2)); // Output: "Yes"
console.log(similarString(12, "xyzzzbbbbbxx", 3, "bxy", 3)); // Output: "No"

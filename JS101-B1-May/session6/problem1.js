//     Problem Description
// Write a program to reverse the words present in a sentence.

// Input format
// First line contains an string consisting of words separated by spaces.

// Output format
// Return the string with it's words reversed.

// Sample Input 1
// abc def ghi

// Sample Output 1
// cba fed ihg

// Explanation
// abc reversed is cba, def reversed is fed, ghi reversed is igh.
function reverseCharacters(str) {
    return str.split(" ").map(w=> w.split("").reverse().join("")).join(" ");
}
let str = " imran khan pathan"
const result = reverseCharacters(str)
console.log(result);
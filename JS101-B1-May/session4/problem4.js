// Problem Description
// Given a string, count the total number of vowels present in that string.

// Input format
// First line contains the given string.

// Output format
// Print the total number of vowels.

// Sample Input 1
// language

// Sample Output 1
// 4

// Explanation
// There are total 4 vowels in the string "language" i.e. 'a', 'u', 'a', 'e'.

// Constraints
// 0 < Length of string < 100
function countVowels(word) {
 
    let temp = 0;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
    temp++ ;
        }
      }
      return temp;
    }
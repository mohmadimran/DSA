// Problem Description
// Given a paragraph of words, capitalize the first character of each word and return the paragraph.

// Input format
// First line contains a string - The paragraph.

// Output format
// Print the paragraph after capitalizing each word.

// Sample Input 1
// the quick Brown fox jumps over The lazy dog.

// Sample Output 1
// The Quick Brown Fox Jumps Over The Lazy Dog.

// Explanation
// Each word has it’s first character capitalized

// Constraints
// Length of paragraph < 100.

// The paragraph contains spaces, lowercase and uppercase characters.

function capitalizeFirstLetter(str){
    let word = str[0].toUpperCase();
    return word + str.slice(1);
  }
  
  // TODO: Implement this method
  function capitaliseBasic(paragraph) {
  let letters = paragraph.split(" ");
  
  for(let i = 0; i < letters.length; i++){
  letters[i] = capitalizeFirstLetter(letters[i]);
  }
  return letters.join(" ");
  }
// Q1.  basic exampale of compression
function stringCompression(s) {
    let one = s.indexOf("1");
    let zero = s.lastIndexOf("0");
    if(one > zero || one == -1 || zero == -1){
        return s;
    }
    return s.slice(0,one) + s.slice(zero);
}
let value = 101101;
stringCompression(value)
// output:01;


//Q2. Problem Description
// You are given a string S and you have to implement a function to perform basic string compression, using the counts of repeated characters.

// If the "compressed" string would not become smaller than the original string, your function should return the original string.

// You can assume the string has only uppercase and lowercase letters (a - z).


// Input format
// A single line that contains the string S.


// Output format
// A single line that represents the compressed string as specified in the problem.


// Sample Input 1
// aabccccc


// Sample Output 1
// a2b1c5


// Explanation 1
// First 'a' repeats two times, then 'b' repeats once, then 'c' repeats two times.

function stringCompression(s) {
    let result = "";
    let char = "#";
    let occurence = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] !== char){
            if(char !== "#"){
                result += char + occurence;
            }
            occurence = 1 ;
            char = s[i];
        }
        else{
            occurence++ ;
        }
    }
    if(char !== "#"){
        result += char + occurence;
    }
    if(result.length >= s.length){
        return s ;
    }
    return result;
    }

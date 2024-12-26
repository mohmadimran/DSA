// Problem Description
// You are given two strings, a main string S, and a pattern P. You have to find the starting indices of the anagrams of P in S.


// Anagrams are permutations of a string. For P="abc”, its anagrams are abc,acb,bca,bac,cba,cab.


// Note that indexing starts at 0.

// Input format
// There is one line of input, containing two space-separated strings S and P.

// Output format
// First-line should contain the number of such starting indices.

// Next line should contain the indices in increasing order separated by a space.

// Sample Input 1
// aaba ab

// Sample Output 1
// 2

// 1 2

// Explanation 1
// The anagrams of pattern "ab" are “ab” and “ba”. These are present at indices 1 and 2 of the input string “aaba”.

// Sample Input 2
// bacdgabcda abcd

// Sample Output 2
// 3

// 0 5 6

// Explanation 2
// The anagrams of "abcd" can be seen as “bacd” at index 0, “abcd” at index 5 and “bcda” at index 6.

// Constraints
// 1 <= length(S), length(P) <= 10^6

function compMapFun(s1,s2){
    if(s1.size != s2.size)
    {
      return false ;
    }
    for(let [key1,val1] of s1)
    {
      let val2 = s2.get(key1);
      if(val1 != val2)
      {
        return false;
      }
    }
    return true ;
  }
  
  function findAllAnagramsInAString(s, p) {
    let stor1 = new Map();
    for(let i = 0; i < p.length ; i++)
    {
      stor1.set(p[i],(stor1.get(p[i]) || 0) + 1);
    }
    let result = [] ;
    let stor2 = new Map();
    for(let i = 0 ; i < s.length ; i++)
    {
      stor2.set(s[i],(stor2.get(s[i]) || 0) + 1);
      if( i >= p.length - 1)
      {
        if(compMapFun(stor1,stor2))
        {
          let j = i - p.length + 1 ;
          result.push(j) ;
        }
        let last = s[i - p.length + 1];
        let lastCount = stor2.get(last)
        if(lastCount == 1)
        {
          stor2.delete(last);
        }
        else{
          stor2.set(last,lastCount - 1)
        }
      }
    }
    return result ;
}
// first approch for anagrame  TM is O(n^2) and space O(1)
// function cheakAnna(str1,str2){
//     if(str1.length !== str2.length) return false;
//     for(let i = 0; i< str1.length; i++){
//       if(!str2.includes(str1[i])){
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(cheakAnna("abc","cba"))
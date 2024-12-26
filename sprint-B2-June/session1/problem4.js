function cheak(n,arr,t){
    let s = new Map();
    for(let i = 0; i < n; i++){
      let v = t - arr[i];
      // 7-1= 6, 7-2= 5, 7-3= 4,7-4=3,7-5=2,7-6=1;
      if(s.has(v)){
        let j = s.get(v);
        return [j,i]
      }
      s.set(arr[i],i)
      // 1,2,3,4,5,6
    }
    return[0,0]
  }
  console.log(cheak(6,[1,2,3,4,5,6],7));
//   o/p: [ 2, 3 ]
// Problem Description
// Given an array of integers as input, output the indices of two numbers in the array which add up to a specified target.

// Assume that each input would have exactly one solution and you cannot use the same element twice. If 2 different elements have the same value, they can be used.

// Print the indices in increasing order.

// Input format
// First line contains an Integer N that represents the number of elements in the array.

// Second line contains N space separated integers, which are members of the array.

// Third line contains an integer X, which is the target value.

// Output format
// Print two space separated indices(in increasing order) of the numbers which add up to the specified target.

// Constraints
// 2 <= Length of array <= 100000

// 1 <= Range of values <= 1000000

// Sample Input 1
// 5 --> Number of elements in array

// 2 4 5 9 8 --> Array elements

// 7 --> Target sum value

// Sample Output 1
// 0 2

// Explanation 1
// Since 0 and 2 are the indices where the numbers 2 and 5 which add up to 7 are seen
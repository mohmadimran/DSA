// Problem Description
// Given a matrix of dimension nxn having elements 1 to nxn distinct elements. Check whether the matrix is magic square or not.

// Magic square is a square that has the same sum of rows, columns and diagonals.

// Input format
// First line contains integer n.

// In next n lines each line contains n elements.

// Output format
// Print "Yes" if it is a magic square , "No" otherwise.

// Sample Input 1
// 3

// 4 9 2

// 3 5 7

// 8 1 6

// Sample Output 1
// Yes

// Explanation
// All rows, columns and diagonals have sum 15.

// Constraints
// 1 <= n <= 100

// 1 <= element of matrix <= n*n

let mat = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ];
  // main function
  function magicSquare(mat) {
    let diagonal1 = diagonal1Fun(mat);
    let diagonal2 = diagonal2Fun(mat);
    let allRowSum = allRowSumFun(mat);
    let allColSum = allColSumFun(mat);
    if (
      diagonal1 === diagonal2 &&
      diagonal2 === allRowSum &&
      allRowSum === allColSum 
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  function diagonal1Fun(mat) {
    let d1Sum = 0;
    for (let i = 0; i < mat.length; i++) {
      d1Sum += mat[i][i];
    }
    return d1Sum;
  }
  // console.log(diagonal1Fun(mat));
  
  function diagonal2Fun(mat) {
    let d2Sum = 0;
    let j = mat.length - 1;
    for (let i = 0; i < mat.length; i++) {
      d2Sum += mat[i][j];
      j--;
    }
    return d2Sum;
  }
  // console.log(diagonal2Fun(mat))
  
  function itrationRow(mat, n) {
    let sum = 0;
    for (let i = 0; i < mat[n].length; i++) {
      sum += mat[n][i];
    }
    return sum;
  }
  // console.log(itrationRow(mat,0));
  
  function iterationCol(mat, n) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
      sum += mat[i][n];
    }
    return sum;
  }
  // console.log(iterationCol(mat,0))
  
  function allRowSumFun(mat) {
    let row = itrationRow(mat, 0);
    for (let i = 1; i < mat.length; i++) {
      let temp = itrationRow(mat, i);
      if (row !== temp) {
        return -1;
      }
    }
    return row;
  }
  
  function allColSumFun(mat) {
    let col = iterationCol(mat, 0);
    for (let i = 1; i < mat.length; i++) {
      let temp = iterationCol(mat, i);
      if (col !== temp) {
        return -1;
      }
    }
    return col;
  }
  
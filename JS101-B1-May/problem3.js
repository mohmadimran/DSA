// Problem Description
// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.

// DO NOT allocate another 2D matrix and do the rotation.

// Input format
// There are N+1 lines of input.

// First line contains one integer N.

// Next N line contains N space separated integers

// Output format
// Print the NxN rotated matrix.

// Sample Input 1
// 3

// 1 2 3

// 4 5 6

// 7 8 9

// Sample Output 1
// 7 4 1

// 8 5 2

// 9 6 3

// Sample Input 2
// 4

// 5 1 9 11

// 2 4 8 10

// 13 3 6 7

// 15 14 12 16

// Sample Output 2
// 15 13 2 5

// 14 3 4 1

// 12 6 8 9

// 16 7 10 11

function swapFun(matrix, r1,c1,r2,c2){
    let temp = matrix[r1][c1];
    matrix[r1][c1] = matrix[r2][c2];
    matrix[r2][c2] = temp;
}
function transposeMatFun(matrix){
    for(let row = 0; row <= matrix.length-1; row++ ){
        for(let col=row; col<matrix[0].length; col++){
            swapFun(matrix,row,col,col,row)
        }
    }
}
function reverseRowFun(matrix){
    for(let row = 0; row < matrix.length; row++ ){
        let left = 0;
        let right = matrix[0].length-1;
        while(left < right)
        {
            swapFun(matrix,row,left,row,right)
            left++;
            right--;
        }
    }
}
function rotateImage(matrix) {
    transposeMatFun(matrix);
    reverseRowFun(matrix);
    return matrix;
}

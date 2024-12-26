// let matrix = [
//   [10, 20, 25],
//   [30, 40, 45],
//   [50, 60, 65],
// ];
// 1.print matrix
// function printMatrix(matrix){
//     for(let i=0; i<matrix.length; i++){
//         console.log(matrix[i])
//     }
// }
// printMatrix(matrix)

// 2. print all number of matrix
// function printTwoMatrix(mat) {
//   for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat[i].length; j++) {
//       console.log(mat[i][j]);
//     }
//   }
// }
// printTwoMatrix(matrix);

// 3.print specific row element of matrix
// function printMatrixRow(mat,rowNum){
//     for(let i=0; i<mat[rowNum].length; i++){
//         console.log(mat[rowNum][i])
// [1][0],[1][1]
//     }
// }
// printMatrixRow(matrix, 1);

// 4.print specific column element of matrix
// function printColumnElment(mat,columN){
//     for(let i=0; i<mat.length; i++){
//         console.log(mat[i][columN])
//         // [0][1],[1][1],[2][1]
//     }
// }
// printColumnElment(matrix,1);

// 5.print diagonal matrix
// function diagonalMatrix(mat){
//     for(let i=0; i<mat.length; i++){
//         console.log(mat[i][i]);
// [0][0],[1][1],[2][2]
//     }
// }
// diagonalMatrix(matrix)

// 6.print second diagonal

// function secondDiagonal(mat){
//     let col = mat.length-1;
//     for(let i=0; i<mat.length; i++){
//         console.log(mat[i][col])
//         col--
//         [0][2],[1][1],[2][1]
//     }
// }
// secondDiagonal(matrix);

// basic exampale
let matrix = 
      [[10, 20],
      [30, 40],
      [50, 60]];


function printMatrix(matrix){
    for(let i=0; i<matrix.length; i++){
        console.log(matrix[i])
    }
}
printMatrix(matrix)
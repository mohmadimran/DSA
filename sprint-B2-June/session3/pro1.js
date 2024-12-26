// Problem Description
// Given an m x n matrix, if an element is 0, set its entire row and column to 0.

// Do it in-place, that is, modify the same matrix. Do not create a new one.

// Input format
// First line contains 2 integers m,n - number of rows and columns respectively.

// Next m lines contain space separated n integers.

// Output format
// Output the same matrix.

// Sample Input 1
// 3 3

// 1 1 1

// 1 0 1

// 1 1 1

// Sample Output 1
// 1 0 1

// 0 0 0

// 1 0 1

// Explanation 1
// There is one ‘0’ in the 2nd row and 2nd column, so all the elements in that row and column become 0.

// Sample Input 2
// 3 4

// 0 1 2 0

// 3 4 5 2

// 1 3 1 5

// Sample Output 2
// 0 0 0 0

// 0 4 5 0

// 0 3 1 0

// Explanation 2
// The 1st row, 1st column and 4th column all contain ‘0’, so all the values in these rows & columns become 0.

// Constraints
// M,N <= 500



function setMatrixZeroes(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let rows = new Array(m).fill(false);
    let colms = new Array(n).fill(false);

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] == 0) {
                rows[row] = true;
                colms[col] = true;
            }
        }
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (rows[row] === true || colms[col] === true) {
                matrix[row][col] = 0;
            }
        }
    }
    return matrix ;
}

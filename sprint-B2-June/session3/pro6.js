function spiralMatrixII(n) {

    let num = 1, left = 0, right = n - 1, top = 0, botom = n - 1;

    const matrix = new Array(n);

    for (let i = 0; i < n; i++) {
        matrix[i] = new Array(n).fill(0);
      
    }
      while (num <= n * n) {
            for (let i = left; i <= right; i++) {
                matrix[top][i] = num++;
            }
            top++;

            for (let i = top; i <= botom; i++) {
                matrix[i][right] = num++;
            }
            right--;

            for (let i = right; i >= left; i--) {
                matrix[botom][i] = num++;
            }
            botom--;

            for (let i = botom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;

        }
    return matrix;
}

// Problem Description
// Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)

// Input format
// One line of input, containing a single integer A.

// Output format
// Print a 2-d matrix of size A x A satisfying the spiral order.

// Sample Input 1
// 3

// Sample Output 1
// 1 2 3

// 8 9 4

// 7 6 5

// Explanation
// As you can see the matrix goes spirally with each next position incremented by one.

// Constraints
// 1<=A<=1000
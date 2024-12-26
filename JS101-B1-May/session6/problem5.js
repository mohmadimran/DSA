// Problem Description
// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// Input format
// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Output format
// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

// Sample Input 1
// UD

// Sample Output 1
// true

// Explanation
// The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

// Sample Input 2
// LL

// Sample Output 2
// false

// Explanation
// The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.

// Constraints
// 1 <= moves.length <= 10^4

function robotReturnToOrigin(moves) {
    let row = 0; let col = 0;
    for(let move of moves){
        if(move === "U"){
            row--;
        }
        else if(move ==="D"){
            row++;
        }
        else if(move === "L"){
            col--;
        }
        else{
            col++;
        }
      }
      if(row ==0 && col == 0){
          return true ;
      } 
      return false;
    
    }
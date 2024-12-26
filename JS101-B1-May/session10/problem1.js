// count prime number till given number 9 

function cheakP(n){
    if(n <= 1) return false;
      for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
          return false ;
        }
      }
      return true ;
    }
    console.log(cheakP(9))
    function countP(prime){
      let count = 0 ;
      for(let i = 2; i < prime; i++){
        if(cheakP(i) === true){
          count++ ;
        }
      }
      return count;
      
    }
    console.log(countP(9))
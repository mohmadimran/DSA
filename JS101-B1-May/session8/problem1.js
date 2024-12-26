function findSingleE(ele){
    let map = new Map();
    for(let i = 0; i < ele.length; i++){
      if(!map.has(ele[i])){
        map.set(ele[i],1);
      }else{
        let val = map.get(ele[i]);
        val= val + 1;
        map.set(ele[i],val)
      }
    }
    for(let[key,val] of map){
      if(val === 1){
        return key;
      }
    }
  }
  findSingleE([1,1,2,3,4])
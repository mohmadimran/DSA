function removeListedValues(arr, without) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
          let arrOutput = arr[i];
          let isFlag = false;
          for (let j = 0; j < without.length; j++) {
                let withoutOutput = without[j];
                if (arrOutput === withoutOutput) {
                      isFlag = true;
                }
          }
          if (isFlag === false) {
                result.push(arrOutput);
          }
    }

    return result;
}
let a = [1,2,3,2,4];
let b = [2,4]
console.log(removeListedValues(a,b))
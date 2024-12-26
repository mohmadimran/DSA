// crate map data structure
let emppoyee = new Map();

// perform CRUD operation
// create
emppoyee.set(0,"imran")
console.log(emppoyee);
// read data
emppoyee.get(0);
console.log(emppoyee);
// update data 
emppoyee.set(0,"altaf");
console.log(emppoyee)
// delete data 
emppoyee.delete(0);
console.log(emppoyee)
// change the empoyee key
let newEmp = emppoyee.get(0);
emppoyee.delete(0);
emppoyee.set(1,"imran")
console.log(emppoyee)
// get the length of record, how many key value pair
console.log(emppoyee.size);
// iteration over map
for(let i of emppoyee){
    console.log(i)
} 
// or 
emppoyee.forEach((key,val)=>console.log(`${key} + ${val}`))
// get the all key of object
console.log(emppoyee.keys());
// or 
console.log(...emppoyee.keys());
// get the all values of object
console.log(emppoyee.values())
// or 
console.log(...emppoyee.values())
// remove all data
emppoyee.clear()
console.log(emppoyee);
// cheak empoye id or present or not it return true or false only
emppoyee.has(1);
console.log(emppoyee);

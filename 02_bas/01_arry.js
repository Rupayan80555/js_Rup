const myArray=['wio',1,null,true,Number,undefined,{},[],()=>{}]
let a=0;
while(a<9){
    // console.log(myArray[a]);
    a++;
}
// console.log(typeof(myArray[4]))

// Array methods
let myArray2=[1,2,3,4,5,6,myArray]
// console.log(myArray2)

let myArray3 =[4,5,6]
// myArray3.push(7)
// myArray3.unshift(88)
// myArray3.pop()
// myArray3.shift()
// console.log(myArray3)
let newArray = myArray3.join("_") //join(separator) makes array string
// console.log(newArray);

// slice,splice 

let ar =[0,1,3,2,4,5,88,8,6,7]
const nar=ar.slice(1,7)
// console.log(nar);
// console.log("ori",ar);
const nar2=ar.splice(1,6)
// console.log(nar2);
// console.log("ori",ar);

// splice brakes array from starting index to end index and create separate array taken value from original value
// And slice don't brakes array it creates a new array but not removing elements from main array it starts from starting index to end Index-1.
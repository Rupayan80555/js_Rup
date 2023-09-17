let score ="1234"
console.log(typeof (score))
let value = Number(score)
console.log(typeof value)

/*
 #Type conversion into int(Number) Outputs:-
    1) "33"=>33(as a number)
    2)"33abc" => NaN
    3)null =>0
    3)undefined =>NaN
    4) NaN => number

/*
 #Type conversion into bool(Boolean) outputs :-
    1) ""(empty string)=>false
    2) "Full string" =>true
    3) NaN => false
    4) undefined => false

*/

console.log("\n \n")
let b =''
let boll=Boolean(b)
console.log(boll)
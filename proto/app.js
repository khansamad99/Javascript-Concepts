let str = "abcdef"          // 3 levels from NULL
let num = 200               // 3 levele from NULL
let bool = true             // 3 levels from NULL
let arr = [1,2,3,4,5]       // 3 levels from NULL
let obj = {a:10,b:'abcdef'} // 2 levels from NULL
let fun = function () { console.log ('yay!') }  // 3 levels from null


// if x and y are not primitive
// x == y :true 
// this means they are refernce to the same object in memory

console.log('======= types =======')
console.log('type of String',typeof String)
console.log('type of Object',typeof Object)
console.log('type of Boolean',typeof Boolean)
console.log('type of Number',typeof Number)
console.log('type of Array',typeof Array)
console.log('type of function',typeof Function)


console.log('======= proto chain =======') 
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)

//Everything indirectly inherits from the same thing
// that obj is inherited from
// i.e. in Javascript, everything is essentially an Object

console.log('======= prototypes ======= ')
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(fun.__proto__ == Function.prototype)
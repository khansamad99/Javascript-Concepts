console.log(1 == '1');
console.log(1 === '1');

//peculiar cases
console.log(0 == '') // true because Number('') == 0
console.log('false' == false) // false


console.log('' == false) // true, both typecast to 0

console.log([1,2] == [1,2]) // In non-primitive data value is actually the reference
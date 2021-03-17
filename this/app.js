// this in JS behaves diffrently
// A property of an execution context (global, function or eval) that, in non–strict mode,
// is always a reference to an object and in strict mode can be any value.

// Execution Context: If a function is called through an Object or wherever function is called so 'this' points to that
// So 'this' points to the place where function has been called 

//'this' can also be called outside a function where it points to Global Scope


function checkThis() {
    console.log(this);
}

//checkThis()  // Output: global Object

let obj = {
  a: 10,
  b: 'asdsa',
  c: true,
  d: function () {
    console.log(this)
  }
}

//obj.d() // Output:{ a: 10, b: 'asdsa', c: true, d: [Function: d] }  Here 'this' points to object itself

let obj2 = {
    a: 10,
    b: 'asdsa',
    c: true,
    d: function () {
      console.log(this)
    },
    e:{
        l: 234,
        m: 'sdgsdg',
        n: function () {
        console.log(this)
    }
  }
} 


  let z = obj2.d

  //z() // Output is Global Object
      // So basically 'this' in JS bounds at runtime
      // When this func will run the JS interpreter will check if that func is called  via an Object then 'this' will point the object
      //If it is not called via an object then it will point current scope


      let obj3 = {
        "a": 10,
        b: 'asdsa',
        c: true,
        d: function () {
          console.log(this)
        },
        10: 32246,
        true: 'asdasd',
        e: {
          l: 234,
          m: 'sdgsdg',
          n: function () {
            console.log(this)
          },
        },
      }

      obj3.e.n() // Output : { l: 234, m: 'sdgsdg', n: [Function: n] } It is pointing to 'e' object
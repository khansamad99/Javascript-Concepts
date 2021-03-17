function outer(arg1) {
    let var1 = 10
    
    function inner(arg2) {  // function inner is born line 4 to 8
      let var2 = 20
      console.log(arg1, var1, arg2, var2)
      console.log(arguments[0])
    }
  
    return inner
    // return 10
  }
  
  let x = outer('param1')
  
  // typeof x == 'function'
  // x == inner
  
  // scope of arg1 and var1 are from lines 2 to 10
  
  x('param2')

  //Output :param1 10 param2 20

  // Definition Of Closures scope
  // Whenver a function is born whatever scopes were available to it's birth place are 
  // captured by the function and they remain till the function exist in the memory


  // This is infinitely nestable
  // Variables can be shadowed inside closure scope
  // Meaning:
  // A variable of the same name in a outer scope and a variable of same name in 
  // inner scope we will only be able to access the inner one(Happens in Class based Inheritance in OOPS)

  // argunments keyword is not captuted in CLosures

  function outer(arg1) {
    let var1 = 10
    let y = 10
    
    function inner(arg2) {  
      let var2 = 20
      let y = 20
      console.log(arg1, var1, arg2, var2, y)  // y will be 20 ,(20 here will shadow 10 in outer function)
      console.log(arguments[0])
    }
  
    return inner
  }
  
  let x = outer('param1')
  x('param2')



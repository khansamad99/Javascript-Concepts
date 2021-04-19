class Person
{
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}

let p = new Person('Samad',21)

console.log(typeof Person) // function; there is NO new datatype called 'class'
console.log(p.__proto__ == Person.prototype) // true
console.log(p.__proto__.__proto__ == Object.prototype) //true


class Student extends Person {
    constructor(name, age, grade) {
      super(name, age)
      this.grade = grade
    }
  }
  
  let s1 = new Student('Harry Potter', 13, 5)
  let s2 = new Student('Hermoine Granger', 14, 6)
  
  console.log(s1.__proto__ == Student.prototype)
  console.log(s1.__proto__.__proto__ == Person.prototype)
  console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)
  
  // inheritance chain 
  // Object.prototype -> Person.prototype -> Student.prototype
  
  // no inheritance between the classes (actually they are functions)
  // Object -x-> Person -x-> Student
let obj1 = {
    a:10,
    b:20,
    c:30
}

let obj2 = Object.create(obj1)

// obj2 == obj1
// false
// obj2.__proto__ == obj1
// true

obj2.p = "abc"
obj2.q = "def"
obj2.r = "hij"

let obj3 = Object.create(obj2)
/* 
    obj2.a -> it will try to find a in obj2
        -> if not found, 
        -> it will try to find it in obj2.__proto__
        -> if not found,
        -> it will try to find it in obj2.__proto__.__proto__
        -> ... and so on... 
        -> till .__proto__ becomes null
*/


// obj3
// {}
// obj3.__proto__
// {p: "abc", q: "def", r: "hij"}
// obj3.__proto__.proto
// undefined
// obj3.__proto__.__proto__
// {a: 10, b: 20, c: 30}
// obj3.__proto__.__proto__ == obj1
// true
// obj3.__proto__.__proto__ == obj2
// false
// obj3.__proto__ == obj2
// true
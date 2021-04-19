function someAsyncTask (callback) {
    console.log("Beginning of Task")
    setTimeout(function () {
        console.log("End of Task")
        callback()
    },3000)
}

// someAsyncTask(function(){
//     console.log("HI")
// })

let someTaskPromise  = function() {
    return new Promise((resolve,reject) => {
        someAsyncTask(resolve)
    })
}

someTaskPromise()
    .then( () => {
        console.log("Task2")
    })


// When we use an async function we have a async function genreally called and inside that function we create another function

// Async func(func1(){}) ->  func1 is called when task is done
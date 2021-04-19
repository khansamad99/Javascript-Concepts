function hello(times,name){
    return new Promise((resolve,reject) => {
        let count = 0 
        let loopId = setInterval(() => {
            count++;
            console.log('Hello ' + name)
            if(count === times){
                clearInterval(loopId)
                resolve()
            }
        },100)
    })
}

hello(3,'Samad')
    .then(() => {
        hello(4,'Rahul')
    })
module.exports = {
    hello
}
function hello(times,name,done){
    let count = 0 
    let loopId = setInterval(() => {
        count++;
        console.log('Hello ' + name)
        if(count === times){
            clearInterval(loopId)
            done()
        }
    },100)
}

hello(4,"Samad",()=> {
    hello(3,"Rahul",() => {
        hello(3,"Raj",()=> {

        })
    })
})

module.exports = {
    hello
}
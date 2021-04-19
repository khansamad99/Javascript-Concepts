function downloadPromise() {
    return new Promise((resolve,reject) => {
        console.log("Starting Download...")
        setTimeout(() => {
            console.log("Download is complete")
            resolve()
        },3000)
    })
}

let downloadedFile = downloadPromise()


setTimeout(() => {
    downloadedFile.then(() => {
        console.log("After Download")
    })
},5000)
// downloadPromise().then(function(){
//     console.log("After Download")
// })
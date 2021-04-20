function download(url) {
    return new Promise((resolve,reject) => {
        if(!url.startsWith('http')){
            reject(new Error("URL does not start with http"))
        } else {
            console.log("Start Download")
            setTimeout(() => {
                let fileName = url.split('/').pop()
                resolve(fileName)
            },3000)
        }
    })
}

function resize(fileName) {
    return new Promise((resolve,reject) => {
        if(!fileName.endsWith('png')){
            reject(new Error("File format not supported"))
        } else {
            console.log("Start Resize " + fileName)
            setTimeout(() => {
                let resizedFile = fileName.split('.')[0] + '-resized' + '.png'
                resolve(resizedFile)
            },3000)
        }
    })
}


function upload(resizedFile){
    return new Promise((resolve,reject) => {
        console.log("Start Upload " + resizedFile)
        setTimeout(() => {
            let uploadedUrl = "http://imgur.com/" + resizedFile
            resolve(uploadedUrl)
        })
    })
}

download("http://ab.lk/abc.png")
    .then(resize)
    .then(upload)
    .then((uploadedUrl) => console.log("Image is uploaded on " + uploadedUrl))
    .catch((err) => console.error(err))
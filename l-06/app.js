const fs = require('fs')
const path = require('path')




// /////////////////////////////////читать файлы

// fs.readFile('tq.txt', (err, data)=>{
//     console.log(data.toString())
// } )
//
// let text = fs.readFileSync('tq2.txt', 'utf-8')
// console.log(text)

//////////////////////////////читать папки

// fs.readdir('papka', (err, files) => {
//     console.log(files)
//     files.forEach(file => {
//         // console.log(file)
//         // console.log(path.extname(file))
//         console.log(`${file}\t\t${path.extname(file)}\t\t${fs.statSync(`papka/${file}`).size}B`)
//     })
// })


//////////////////////////////////записывать файлы

fs.writeFile('newfile.txt', 'gogogogogogo', (err)=>{
    err && console.log(err)
})
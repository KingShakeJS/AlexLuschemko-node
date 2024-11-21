const http = require('http')
const fs = require('fs')
const path = require('path')

const Port = 3003
const myServer = http.createServer((req, res) => {

    console.log(`реквест ${req.url}`)

    if (req.url === '/') {
        sendRes('index.html', 'text/html', res)
    }else {
        sendRes(req.url, getContentType(req.url),res)
    }

}).listen(Port, () => {
    console.log('server start')
})


function sendRes(url, contentType, res) {
    let file = path.join(__dirname + '/static/', url)
    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(404)
            res.write('файл нот фаунд')
            res.end()
            console.log('40004', file)
        } else {
            res.writeHead(200, {'Content-Type': contentType})
            res.write(content)
            res.end()
            console.log(file)
        }
    })
}


function getContentType(url) {
    switch (path.extname(url)) {
        case '.html':
            return 'text/html'
        case '.css':
            return 'text/css'
        case '.js':
            return 'text/javascript'
        case '.json':
            return 'application/json'
        default:
            return 'application/octate-stream'
    }
}
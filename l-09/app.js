const http = require('http')

// 09 8:00

http.createServer((req, res) => {
    console.log('server work')
    console.log(req)
    res.end('end')
}).listen(3003)
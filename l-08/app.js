const http = require('http')
const url = require('url')
const {parse} = require('querystring')


http.createServer((req, res) => {
    if (req.method === 'GET'){
        console.log('server work')
        console.log(req.method)
        let urlReq = url.parse(req.url, true)
        console.log(urlReq.query.test)
        if (urlReq.query.test % 2 === 0){
            res.end('четное')
        }
        res.end('не четное')
    }else {
        let body = ''
        req.on('data', chunk => {
            body +=chunk.toString()
        })
        req.on('end', () => {
            console.log(body)
            let params = parse(body)
            console.log(params)
            res.end('ok')
        })
    }

}).listen(3003)
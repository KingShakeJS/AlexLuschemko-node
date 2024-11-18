const http = require('http')
const url = require('url')


const PORT = 3003
http.createServer((req, res) => {

    let urlParts = url.parse(req.url)
    // console.log(urlParts)
    console.log(urlParts.pathname)


    if (req.method === 'GET') {
        switch (urlParts.pathname) {
            case '/':
                homepage(req, res)
                break
            case '/about':
                about(req, res)
                break
            default:
                page404(req, res)

        }
    } else if (req.method === 'POST') {
        switch (urlParts.pathname) {
            case '/about':
                postAbout(req, res)
                break
            default:
                page404(req, res)
        }
    }else {
        page404(req, res)
    }


}).listen(PORT)

function homepage(req, res) {
    res.end('homepage')
}

function about(req, res) {
    res.end('about')
}

function page404(req, res) {
    res.end('404')
}

function postAbout(req, res){
    res.end('postAbout')

}
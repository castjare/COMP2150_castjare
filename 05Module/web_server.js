var http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write('<h1>Ground control to major Tom.</h1>') 
    res.end()
}).listen(3000)
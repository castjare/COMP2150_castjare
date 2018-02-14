var http = require('http')

var url = 'http://localhost:8000'

var body = ''

http.get(url, (response) => {

    response.setEncoding('utf8')
    
    response.on('data', (chunk) => {
        body += chunk
        //console.log(body)
    })
    response.on('end', () => {
        var jsonData = JSON.parse(body)
        console.log(jsonData.films[0])
    })
})
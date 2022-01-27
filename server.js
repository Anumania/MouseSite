const http = require('http');
const fs = require('fs')

const server = http.createServer(function (request, response) {
    
    })

const port = 3200
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
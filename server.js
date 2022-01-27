const http = require('http');
const fs = require('fs')

const server = http.createServer(function (request, response) {
    request.on('data', (chunk) => {
        console.log(chunk.toString())
        console.log(request.socket.remoteAddress)
      });
    response.writeHead(200, { 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*',  'Content-Type': 'application/json' });
    response.end()
    })

const port = 3200
const host = '2620:9b::1901:900a'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
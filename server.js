const http = require('http');
const fs = require('fs')

const server = http.createServer(function (request, response) {
    var mousePositions = {}
    if (request.method == 'OPTIONS') {
        response.writeHead(200, { 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
        response.end()
    }
    if (request.method == 'POST') {
        request.on('data', (chunk) => {
            mousePositions[request.socket.remoteAddress] = JSON.parse(chunk.toString())
        });
        response.writeHead(200, { 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
        response.end()
    }
    if (request.method == 'GET') {
        ipsToSend = []
        console.log(ipsToSend)
        for (var ip in mousePositions) {
            if (ip != request.socket.remoteAddress) {
                ipsToSend.push(mousePositions[ip])
            }
        }
        response.writeHead(200, { 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' });
        response.end(JSON.stringify(ipsToSend))
    }
})

const port = 3200
const host = '2620:9b::1901:900a'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
const http = require('http');
const fs = require('fs')

var mousePositions = {}

const server = http.createServer(function (request, response) {
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
const host = 'fe80::21a6:9715:e589:a6ae'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
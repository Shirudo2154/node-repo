const http = require('http')

// invoked every time user hits server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html'})
    res.end('<p>home page!</p> <h1>Header!</h1>') // Server considers message complete
})

server.listen(5000)
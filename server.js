var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(JSON.stringify(request.headers, null, 4) + "\n\n");
    response.write(JSON.stringify(process.env, null, 4) + "\n\n");
    response.end("Hello World\n\n");
    console.log("this is a log entry " + new Date());
    "cause I can do it this way".split(' ').map(console.log);
});
server.listen(process.env.PORT || 8080);
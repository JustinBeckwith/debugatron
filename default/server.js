var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>debugatron</h1>");
    response.write("<a href='//flex-dot-debugatron.appspot.com'>Flex</a><br>");
    response.write("<a href='//mvm-dot-debugatron.appspot.com'>MVM</a>");
    response.end();
});
server.listen(process.env.PORT || 8080);
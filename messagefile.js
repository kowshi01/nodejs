//var http = require('http');
var fs=require('fs');
const server = http.createServer(function (req, res) {
    const url = req.url;
    const method=req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>New Project</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    } 
    if(method==="POST" && url==='/message'){
        fs.writeFileSync('message.txt','text');
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
});
server.listen(4000);

//
var http = require('http');
var fs = require('fs');
const server = http.createServer(function (req, res) {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        fs.readFile('message.txt','utf8',function(err,data){
        res.write('<html>');
        res.write(`<head><title>New Project</title></head>`); 
        res.write(`<body>${data}</body>`);
        res.write('<body>');      
        res.write(`<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button><br></form>`);             
        res.write(`</body>`);        
        res.write('</html>'); 
        return res.end();
        });        
    }
    if (method === "POST" && url === '/message') {
        const a= [];
        req.on("data", (chunk) => {
            a.push(chunk);
        });
        req.on('end', () => {
            const parsedData = Buffer.concat(a).toString();
            const message1 = parsedData.split('=')[1];
            console.log(message1);
            fs.writeFileSync('message.txt', message1);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });        
    }
});
server.listen(4000);

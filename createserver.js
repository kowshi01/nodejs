//
const http=require('http');
const server=http.createServer((req,res)=>console.log('Kowshika'));
server.listen(4000);
//
const http=require('http');
const server=http.createServer((req,res)=>
{
    res.write('Kowshika');
    res.end();
});
server.listen(4000);

const http = require('http');
const port =8000;

const server = http.createServer();

server.listen(port,function (err){
if(err){
    consolelog(err);
    return;
}
console.log("Server is up and running on port:",port);
});
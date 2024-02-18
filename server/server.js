const http = require('node:http');
// const { resolve } = require('path');
// const fs = require('fs');
const path = require('path');

const port = 9000;
const hostname = '127.0.0.1';

const server = 
http.createServer((req, res) => {

    console.log("Hello server"); 

});

server.listen(port, hostname, () => 
{
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.export = server;
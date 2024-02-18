const http = require('node:http');
const path = require('path');
const fs = require('fs');

const port = 9000;
const hostname = '127.0.0.1';

const server = 
http.createServer((req, res) => {



    // function grid(n){


    // }

    // const a = BigIn()
    let bin = 0b1111
    const bitlength = bin.toString(2).length
    const rightHalf=0;
    const leftHalf=0;
    bin+=2
    let half = Math.floor(bitlength/2);
    let mask = (1 << half) - 1
    console.log(`Mask: ${mask.toString(2)}`)
    console.log( (bin & mask) )

    console.log(typeof bin, bin)

    // console.log(req.method);
    // console.log(req.url);

    // console.log(req)
    console.log("Hello server"); 

});

server.listen(port, hostname, () => 
{
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.export = server;



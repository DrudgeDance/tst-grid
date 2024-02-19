
import http from 'http';
import path from 'path';
import fs from 'fs';

const port = 9000;
const hostname = '127.0.0.1';

import { reRow, reCol} from './grid/Grid.js';

const server = 
http.createServer((req, res) => {



    // function grid(n){


     // }

    // const a = BigIn()

    reRow();
    reCol();

    // console.log(req.method);
    // console.log(req.url);

    // console.log(req)
    console.log("Hello server"); 

});

server.listen(port, hostname, () => 
{
    console.log(`Server running at http://${hostname}:${port}/`);
});

export default server;



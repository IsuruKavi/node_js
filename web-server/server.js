import { logEvents } from "./logEvents.js";
import {EventEmitter} from 'node:events'
import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path'
class MyEmitter extends EventEmitter {}
const __dirname = dirname(fileURLToPath(import.meta.url));

const myEmitter = new MyEmitter();
console.log("tom")
const PORT=process.env.PORT || 8080;
// const options = {
//   key: readFileSync('private-key.pem'),
//   cert: readFileSync('certificate.pem'),
// };
// createServer(options, (req, res) => {
//   res.writeHead(200);
//   res.end('hello world\n');
// }).listen(8080,()=>{console.log("server running")});

createServer(async (req, res)=> {
  console.log("req",req.method,req.url)
  let filePath;
  if(req.url="/" || req.url==='index.html'){
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    filePath=path.join(__dirname,'views','index.html');
    console.log(filePath)
    try {
        const contents=await readFile(filePath,{encoding:'utf8'});
        console.log("contents",contents)
        res.end(contents)
    } catch (error) {
        console.log(error);
    }
  }
}).listen(PORT,()=>{console.log("server start")});
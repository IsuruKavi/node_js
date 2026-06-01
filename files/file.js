import { open } from 'node:fs/promises';
import { readFile } from 'node:fs/promises'
import path from 'path'
import { fileURLToPath } from 'url';
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename)
console.log(__dirname)
// const file = await open(path.join(__dirname,'files','starter.txt'));//we use path module instead of hard code value, due to different os use path differnectly

// for await (const line of file.readLines()) {
//   console.log(line);
// }


// fs.writeFile(path.join(__dirname,'files','reply.txt'),'Nice to meet you',(err)=>{
//     if(err) throw err;
//     console.log("Write complete")
//     fs.appendFile(path.join(__dirname,'files','reply.txt'),"\n\nI append something",(err)=>{
//     if(err) throw err;
//     console.log("Append file")
// })
// })

try {
 
  const contents = await readFile(path.join(__dirname,'files','reply.txt'), { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
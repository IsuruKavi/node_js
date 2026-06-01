
import { compareAsc, format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import {appendFile,mkdir} from 'node:fs/promises'
import path from 'node:path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync} from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));


export const logEvents=async(msg)=>{
  const dateTime=format(new Date(),'yyyyMMdd\tHH:mm:ss')

 const logItem=`${dateTime.toString()} \t${uuidv4()}\t${msg}\n`

  console.log(logItem)
  try {
    if(!existsSync(path.join(__dirname,'logs'))){
        await mkdir(path.join(__dirname,'logs'))
    }
    await appendFile(path.join(__dirname,'logs','logEvents.txt'),logItem)
  } catch (error) {
    console.log(error)
  }

}


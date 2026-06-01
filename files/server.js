// ===============================
// 1) Difference between Node.js and Browser Environment
// ===============================

/*
Browser Environment:
- Runs inside web browsers (Chrome, Firefox, etc.)
- Used for frontend development (UI, DOM manipulation)
- Has access to Web APIs like DOM, fetch, localStorage
- NO access to system features like file system or OS
- No modules like fs, path

Example:
document.getElementById("app")
fetch("https://api.com")

--------------------------------

Node.js Environment:
- Runs on server / computer (outside browser)
- Used for backend development
- Has access to operating system
- Can read/write files using fs module
- Can access paths using path module
- Uses CommonJS (require) or ES Modules (import)
- missing api like fetch,miss most of browser api

Example:
const fs = require("fs");
fs.readFileSync("file.txt");

--------------------------------

Key Idea:
Browser = UI + restricted sandbox
Node.js = Server + full system access
*/
 
// 2) const os=require('os')
//    console.log(os.version(),os.homedir(),os.type());


console.log(__dirname)
console.log(__filename)
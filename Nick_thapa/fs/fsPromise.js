
const fs = require('fs');

const path = require('path')
const filename = "fsPromise.txt";
const filePath = path.join(__dirname,filename);

const file = __dirname;

// fs.promises.readdir(file)
// .then((data)=> console.log(data))
// .catch((err)=> console.error(err))

// fs.promises.writeFile(filePath, 'this is the intial data', "utf-8")
// .then(console.log("file created Successfully!")).catch((err) => console.error(err))
// fs.promises.readFile(filePath,  "utf-8")
// .then((data)=>console.log(data)).catch((err) => console.error(err))
// fs.promises.appendFile(filePath, '\nthis is the updated data', "utf-8")
// .then(console.log("file updated Successfully!")).catch((err) => console.error(err))
// fs.promises.unlink(filePath)
// .then(console.log("file delete Successfully!")).catch((err) => console.error(err))

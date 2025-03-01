const { dir } = require('console');
const fs = require('fs');
const { console } = require('inspector');
const path = require('path')
const filename = "fsAsync.txt";
const filePath = path.join(__dirname,filename)
// const writePath = fs.writeFileSync(filePath,"This is new file 2", "utf-8");

// console.log(writePath)

// // const readFile = fs.readFileSync(filePath,'utf-8')
// // console.log(readFile)

// const appendFile = fs.appendFileSync(filePath,"\nThis is new file 2", "utf-8");

// console.log(appendFile)
// const fileDelete = fs.unlinkSync(filePath);

// console.log(fileDelete)

// const newUpdateFile = "Nick.txt"
// const newFilePath = path.join(__dirname, newUpdateFile) ;

// const renameFile = fs.renameSync(filePath,newFilePath);
// console.log(renameFile)
fs.writeFile(filePath, "This is the initial data","utf-8",(err)=>{
 if(err) console.error(err)
    else console.log("File has been save")
})
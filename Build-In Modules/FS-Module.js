// File System Module
const fs = require('fs')

// Two flavours
// 1. Synchronous - Blocking
// 2. Asynchronous - Non-Blocking

// Two types can access the module
// const fs = require('fs')
// fs.method()
//      OR
// const { method } = require('os')

// To read the file usinf sync, need to pass 2 parameters
// 1. Path of the file
// 2. Encoding of the file (utf-8)

const first = fs.readFileSync('./Build-In Modules/FS Example Folder/First.txt', 'utf-8')
const second = fs.readFileSync('./Build-In Modules/FS Example Folder/Second.txt', 'utf-8')
console.log(first)
console.log(second)


// Write a file
// 2 Parameters -> 1. Path of the file to be written, 2. Data to be written
// If the file is not present , it will create and write the content
fs.writeFileSync('./Build-In Modules/FS Example Folder/WriteFile.txt', "This is the content of the file")

// By default writeFileSync will overwrite, i we need to append add the flag parameter.
// Eg: { flag }: 'a' -> append
// fs.writeFileSync('./Build-In Modules/FS Example Folder/WriteFile.txt', "This is the content of the file", { flag: 'a' })

// To read the file that is written
const WriteFile = fs.readFileSync('./Build-In Modules/FS Example Folder/WriteFile.txt', 'utf-8')
console.log(WriteFile)


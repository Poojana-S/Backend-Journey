// Async - Callback Hell
const { readFile, writeFile } = require('fs')

readFile('./Build-In Modules/FS Example Folder/First.txt', 'utf8' , (err,res) => {
    if(err){
        console.log(err)
        return
    }
    const firstFile=res
    console.log(firstFile)
    readFile('./Build-In Modules/FS Example Folder/Second.txt','utf8',(err,res) => {
        if(err){
            console.log(err)
            return
        }
        const secondFile=res
        console.log(secondFile)
        writeFile(
            './Build-In Modules/FS Example Folder/WriteFile.txt',
            `The result of 2 files ${firstFile} ${secondFile}`,
            (err) => {
                if(err){
                    console.log(err)
                    return
                }
            }
        )
    })
})
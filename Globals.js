// Globals - No window
//     → Any where we can access
//     __dirname → path to current directory
//     __filename → file name
//     require → function to use modules (commonJS)
//     module → info about current module
//     process - infor about env where the program is being executed


console.log(__dirname)
console.log(__filename)
setInterval(() => {
    console.log('Hello World')
},1000)
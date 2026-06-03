const path = require('path')

// Separator of the path
console.log(path.sep)

// Join method -> To join the sequence of path segments using the platform specific separator as a delimiter
// then normalizes the resulting path.
// Trailing slash is removed automatically
// eg. path.join('/content/', 'subfolder', 'test.txt') --> /content/subfolder/test.txt will be the output
const filepath = path.join('Modules', 'Names.js') // any path can be form be form
console.log(filepath)

// To get the ast portion of the path
const basename = path.basename(filepath)
console.log(basename)

// To get the absolute path, Absolute path is the full path from the root to the file
// Some systems have different root directories, so this can be useful to get the absolute path of a file
const absolute = path.resolve(__dirname, 'Build-In Modules', 'OS-Module.js')
console.log(absolute)


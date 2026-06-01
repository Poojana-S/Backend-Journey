const Names = require('./Names')
const sayHi = require('./Utils')
const AlternativeWay = require('./Alternative-Way')



// To Print the names
// console.log(Names)

sayHi("Poojana")


// John & Peter are shared variables and are under Names module, so need to access like object.property
sayHi(Names.john)
sayHi(Names.peter)
sayHi(Names.secret) // undefined because secret is not shared variable, it is local to Names module


// Alternative way to export
console.log(AlternativeWay)
console.log(AlternativeWay.items)
console.log(AlternativeWay.singlePerson)

// Without assigning to a variable we can execute the file
// If module is not exported then it will be empty object, so we can execute the file but cannot access anything from it
require('./Mind-Grenade') // only for executing the file, not for importing anything
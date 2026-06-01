// Modules
//     -> Execute one file
//     -> Not all code in one file
//     -> Code is splitted into different files


// -> commonJS --> every file is module (by default)
// -> Modules --> Encapsulated Code (only share minimum)

const john = "John"
const peter = "Peter"

const sayHi = (name) => {
    console.log("Hello " + name)
    console.log(`Hello ${name}`)
}

sayHi("Poojana");
sayHi(john)
sayHi(peter)
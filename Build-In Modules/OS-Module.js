const os = require('os') // built in module, no need to install anything -> need to import it

// os. will list the methods present in os module


// To get the platform of the system (Which OS we are using)
console.log(os.platform())


// To get user info
// Info about the current user
const user = os.userInfo()
console.log(user)

// To get the uptime of the system in seconds
console.log("The system uptime is: " + os.uptime() + " seconds") 

// Info about the current system (OS)
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)


function greeting (name){
    console.log('Hello', name)
}

//to print out absolute path
console.log(__filename)

module.exports = greeting;

//Dont export like this:
//exports = greeting, 
//because module.exports = {}
//will be empty object
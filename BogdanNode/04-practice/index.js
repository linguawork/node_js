/*
    содержание экспортируемого файла: multiple-exports.js

    const myName = 'Bogdan'
    const myHobbies = ['swimming', 'boxing', 'cycling']
    const myFavoriteNumber = 77

    module.exports.myName = myName
    module.exports.myHobbies = myHobbies
    module.exports.myFavoriteNumber = myFavoriteNumber
*/


/*
    module.exports - это пустой объект. 
    В который мы сохраняем данные
*/

//const exportedObject = require('./multiple-exports.js')

//можно также без расширения js
const exportedObject = require('./multiple-exports')

console.log(exportedObject)

//destructuring
const {myName, myHobbies, myFavoriteNumber} = exportedObject

console.log(myName)
console.log(myHobbies)
console.log(myFavoriteNumber)

/*
    Output:
        {
            myName: 'Bogdan',
            myHobbies: [ 'swimming', 'boxing', 'cycling' ],
            myFavoriteNumber: 77
        }
            
        Bogdan
        [ 'swimming', 'boxing', 'cycling' ]
        77
*/

//the name of the single imported file changed
const greetingFn = require('./single-export')

//Dont use absolute Path
// const greetingFn = require('/home/areggie/Desktop/node_js/BogdanNode/04-practice/single-export.js')


console.log(greetingFn)
greetingFn(myName);
/*
    [Function: greeting]
    Hello Bogdan
*/



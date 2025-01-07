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

//MULTIPLE VAR IMPORT IN ONE OBJECT: import from multiple export
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

//SINGLE FILE IMPORT: import from single -export
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


/* Imports from export and import
    import or re-export
    чтобы были подсказки нужно писать require
    пересекается с другим myName, поэтому можно переименовать
    через:
*/
const {myName: myOtherName, myFriendsName, myGreatHobbies} = require('./export-and-import')


console.log('Here is the re-exported variable:')
console.log(myOtherName)
console.log(myFriendsName)



//расширение импортированного массива
console.log(
    'extension of myHobbies array and comparing with its reexport', 

)
myHobbies.push('climbing')  
console.log('myHobbies is:')
console.log(myHobbies)
console.log('myGreatHobbies is:')
console.log(myGreatHobbies)

/*
    Why do we use const when importing:
    this means the variables are constant and
    are not meant for changing
*/
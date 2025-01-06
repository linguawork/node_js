const myName = 'Bogdan'
const myHobbies = ['swimming', 'boxing', 'cycling']
const myFavoriteNumber = 77


//можно работать просто через exports
exports.myName = myName
module.exports.myHobbies = myHobbies
module.exports.myFavoriteNumber = myFavoriteNumber

/*
    module.exports - это пустой объект. 
    В который мы сохраняем данные 
*/
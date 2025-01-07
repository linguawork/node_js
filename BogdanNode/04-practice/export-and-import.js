//import 
const {myName, myHobbies} = require('./multiple-exports')

const myFriendsName = 'Alice' 

module.exports.myName = myName
module.exports.myFriendsName = myFriendsName

//imported myHobbies may be exported with different name
module.exports.myGreatHobbies = myHobbies
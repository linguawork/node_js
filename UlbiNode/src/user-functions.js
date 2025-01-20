/*
    Возьмем функции связанные с user 
    и перенесем их в файл: user-functions.js
    Удобства ради

    Теперь импортируем класс из монго дб, указав путь, 
    и будем использовать вместо массива
    Массив удалим
*/


const User = require('./user-schema')
// теперь User - это база данных



// обращение к БД это асинхронный процесс,
// обе функции сделаем асинхр
const findUser = async (req, res) => {

    let users
    if (req.params.id){
        users = await User.findById(req.params.id)
    }else{
        //нахождение юзера в БД родной функцией Базы
        const users = await User.find()
    }
    res.send(users)

}




const createUser = async (req, res) => {

    //запрос от юзера на создание
    const user = await User.create(req.body)
    // отправка юзера клиенту в ответе
    res.send(user)
}

module.exports = {
    findUser,
    createUser
}




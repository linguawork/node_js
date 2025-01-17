/*
    Возьмем функции связанные с user 
    и перенесем их в файл: user-functions.js
    Удобства ради
*/

//отправим массив на клиент через JSON string

const users = [
    {
        id: 1, 
        name: 'MBS'
    }, 
    {
        id: 2, 
        name: 'Vasya'
    }
]

const findUser = (req, res) => {

    if(req.params.id){
        //поиск юзера по id
        return res.send(users.find(user=>user.id == req.params.id))
    }

    //чтобы массив отразить не как строку в браузере
    //нужно писать Content-type:
        // res.writeHead( 200, {
        //     'Content-type': 'application/json'
        // })

        // //отразить на клиенте
        // res.end(JSON.stringify(users))

        //так как используем мидлвейр
        //no need to use the upper code
        /*
        если вы используете этот миддлвар, 
        вы не обязаны повторно устанавливать заголовок 
        и преобразовывать данные в JSON вручную. 
        Вместо этого, можно сразу использовать res.send(),
         и он будет правильно обрабатывать форматирование
          и установку заголовков.
        */
        console.log(req.params)//вывели параметры 1Ж48Ж27: { id: '1', page: '5' }
        res.send(users)
}

/*
    Was:
    [{"id":1,"name":"MBS"},{"id":2,"name":"Vasya"}]

    Changed:
    [
    {
        "id": 1,
        "name": "MBS"
    },
    {
        "id": 2,
        "name": "Vasya"
    }
    ]
*/


const createUser = (req, res) => {
    console.log(req.body)

    const user = req.body

    users.push(user)
    res.send(user)
}

module.exports = {
    findUser,
    createUser
}

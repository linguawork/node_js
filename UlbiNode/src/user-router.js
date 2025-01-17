/*
1:34:28
    вынос endpoints (отдельных маршрутов) в отдельный файл
    чтобы не были вместе с сервером

    Это называется декомпозиция


*/
const Application = require('../framework/Application')
const Router = require('../framework/Router')
const router = new Router()

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

router.get('/users', (req, res)=>{
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
})

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


    //проверка на лишний endpoint Success
    // router.get('/users', (req, res)=>{
    //     //отразить на клиенте
    //     res.end(JSON.stringify(users))
    // })

router.get('/posts', (req, res)=>{
    //чтобы массив отразить не как строку
        // res.writeHead( 200, {
        //     'Content-type': 'application/json'
        // })
            
        // //отразить на клиенте массив
        // res.end(JSON.stringify(users))


        /*
            если вы используете этот миддлвар, 
            вы не обязаны повторно устанавливать заголовок 
            и преобразовывать данные в JSON вручную. 
            Вместо этого, можно сразу использовать res.send(),
            и он будет правильно обрабатывать форматирование
            и установку заголовков.
        */
        res.send(users)
})



//1:40:39
//working with post request, to test via Postman
router.post('/users', (req, res)=>{
    console.log(req.body)
    const user = req.body
    users.push(user)
    res.send(user)
})

module.exports =router //will import it as userRouter


//1-37-02, Work on Post-man
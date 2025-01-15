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
    //чтобы массив отразить не как строку
    res.writeHead( 200, {
        'Content-type': 'application/json'
    })

    //отразить на клиенте
    res.end(JSON.stringify(users))
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
    res.writeHead( 200, {
        'Content-type': 'application/json'
    })
        
    //отразить на клиенте массив
    res.end(JSON.stringify(users))
})


module.exports =router //will import it as userRouter


//1-37-02, Work on Post-man
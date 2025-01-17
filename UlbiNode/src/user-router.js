/*
1:34:28
    вынос endpoints (отдельных маршрутов) в отдельный файл
    чтобы не были вместе с сервером

    Это называется декомпозиция


*/

const Router = require('../framework/Router')
const router = new Router()

//import of user functions
const controller = require('./user-functions')




//передаем ссылку на функцию
router.get('/users', controller.findUser)




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
//1:50:29 imported the functions, which were moved to another file
//передаем ссылку на функцию
router.post('/users', controller.createUser)

module.exports =router //will import it as userRouter


//1-37-02, Work on Post-man
//1:17:45
/*
    модуль HTTP
    создание своего фреймворка по типу express.js
*/


const PORT = process.env.PORT || 5000;


/* 
    скобки () — для передачи аргументов в конструктор
    Когда создается экземпляр класса в JavaScript, 
    используется синтаксис с new и скобками ()
    для вызова конструктора класса. 
*/
//импорт класса
const Router = require('./framework/Router')
//router.request('GET')
/* 
    Можно вызывать так, используя каждый метод
    router.request('GET')
    
    А можно в классе router написать 
    4 метода, используя request внутри них
    
    get(path, handler){
        this.request('GET', path, handler)
        }
        
    и тд
*/

//import of class Application 
const App = require('./framework/Application')

const app = new App()//dont forget to instantiate after import

const router = new Router() //dont forget to instantiate after import
       
//логика ответа
router.get('/users', (req, res)=>{
    console.log("Here")
    res.end('YOU HAVE SENT THE REQUEST TO /USERS')
})

router.get('/posts', (req, res)=>{
    res.end('YOU HAVE SENT THE REQUEST TO /POSTS')
})

//закинули router c функциями get в app
app.addRouter(router)


/*
    слушаем порт, порт получим из переменных окружения.
    первый арг - Порт
    второй - коллбек
*/
        // server.listen(PORT, () => {
        //     console.log(`Server started on port ${PORT}`);
        // });

//функция нужна чтобы запускать http server
app.listen(PORT, 
    () => console.log(`Server started on port ${PORT}`)
)

//run node index.js in terminal or npm start with nodemon




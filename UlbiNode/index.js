//1:17:45
/*
    модуль HTTP
    создание своего фреймворка по типу express.js
*/


const PORT = process.env.PORT || 5001;
//import of class Application 
const App = require('./framework/Application')
const userRouter = require('./src/user-router')
//1:39:42 import of middleware
const jsonParser = require('./framework/parseJson')

//import of parsed query url: 1-44:34
const parsedUrl = require('./framework/parseUrl')

const app = new App()//dont forget to instantiate after import


//закинули миддлвер в массив миддлверов
app.use(parsedUrl('http://localhost:5001'))//передаем как ссылку
/*
Output
URL {
  href: 'http://localhost:5001/users',
  origin: 'http://localhost:5001',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:5001',
  hostname: 'localhost',
  port: '5001',
  pathname: '/users',
  search: '',
  searchParams: URLSearchParams {},
  hash: ''
}


*/


//закинули миддлвер в массив
app.use(jsonParser) // передаем как ссылку
 //перекинули маршруты в другой файл для передачи массива      
            //логика ответа
            // router.get('/users', (req, res)=>{
            //     console.log("Here")
            //     res.end('YOU HAVE SENT THE REQUEST TO /USERS')
            // })

            // router.get('/posts', (req, res)=>{
            //     res.end('YOU HAVE SENT THE REQUEST TO /POSTS')
            // })
//закинули router c функциями get в app
//закинули userRouter c функциями для передачи массива
// addRouter выполнит middleware перед handler то есть преобразует данные в JSON
app.addRouter(userRouter)



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




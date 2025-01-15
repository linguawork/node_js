//1:17:45
/*
    модуль HTTP
    создание своего фреймворка по типу express.js
*/

const http = require('http');


//создаем событие чтобы работать с функ handler
const EventEmitter =require('events')

const PORT = process.env.PORT || 5000;

//нужны будут события для handler
const emitter = new EventEmitter();

//импорт класса
const Router = require('./framework/Router')


 


/* 
    скобки () — для передачи аргументов в конструктор
    Когда создается экземпляр класса в JavaScript, 
    используется синтаксис с new и скобками ()
    для вызова конструктора класса. 
*/
const router = new Router()
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


//логика ответа
router.get('/users', (req, res)=>{
    res.end('YOU HAVE SENT THE REQUEST TO /USERS')
})

router.get('/posts', (req, res)=>{
    res.end('YOU HAVE SENT THE REQUEST TO /POSTS')
})




const server = http.createServer((req, res) => {
    
    //эмитим события, которые прописали в логике по названию 
    //события, то есть по шаблону события: 
    //`[${path}]:[${method}]`
    //параметры такие же как в функции emitter.on(`[${path}]:[${method}]`, (req, res)
   const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
    

   //если неизвестный url, то закрываем поток, 
   //чтобы он не висел
   //endpoints work normally
   if(!emitted){
        res.end()
    }
    /*
    The line below cause crashing:
    In your framework, you're emitting an event 
    like [path]:[method] 
    which triggers the corresponding handler. 
    If the handler itself calls res.end() or 
    sends a response, that means the connection 
    has already been closed. Trying to call 
    res.end(req.url) afterward would result in
    a crash or undefined behavior.

    Your current code does not need to call 
    res.end(req.url) at all in the server creation. 
    The router.get('/users', handler) already sends 
    a response back when a request is received 
    at /users.
    
    */
    
    
    
    // res.end(req.url); 
});


/*
    слушаем порт, порт получим из переменных окружения.
    первый арг - Порт
    второй - коллбек
*/
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
//run node index.js in terminal or npm start with nodemon




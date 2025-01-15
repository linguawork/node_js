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




class Router{
    constructor(){
    /*
        The object endpoints has this structure:
            endpoints ={
                '/users': {
                    'GET': handler1, 
                    'POST': handler2, 
                    'DELETE": handler3
                }
            }
    */

        this.endpoints = {}
    }


    //default method, path to the method, handler function
    request(method='GET', path, handler){
        //1 проверяем есть ли уже такой метод в endpoint
        /*
            this.endpoints[path] accesses the object 
            corresponding to path (like '/users').

            this.endpoints[path][method] accesses the 
            handler associated with the HTTP method 
            (like 'GET', 'POST', or 'DELETE').
        */
        if(!this.endpoints[path]){
            //if no path like "/users", we initialize with empty obj
            this.endpoints[path] = {}
        }
        //'/users' 
        //сохраняем в другую переменную
        const endpoint = this.endpoints[path]

        //обращаемся к методу внутри path [GET, POST, PUT] [GET, POST, PUT, DELETE]
        //проверяем наличие метода, если он уже есть
        if(endpoint[method]){
            throw new Error(`[${method}] по адресу ${path} уже существует`  )
        }
        //если метода нет, то цепляем handler и событие к нему
        //import event
        endpoint[method] = handler
        /*
            1:24:49 
            Событие создаем по особому названию -
            "[path]:[method]' :

                [/users]:[get]
                [/users]:[post]
                [/comments]:[delete]

            Можно писать по-разному название события, 
            это один из вариантов
        */
        emitter.on(`[${path}]:[${method}]`, (req, res) => {
            //внутри события используем handler с двумя стримами
            //принимаем от пользователя запрос и отправляем ответ
            handler(req, res)
            //1:25:33
            //теперь можно использовать класс Router

        })
    }

    get(path, handler){
        this.request('GET', path, handler)
    }

    post(path, handler){
        this.request('POST', path, handler)
    }

    put(path, handler){
        this.request('PUT', path, handler)
    }

    delete(path, handler){
        this.request('DELETE', path, handler)
    }
}


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
    emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
    
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




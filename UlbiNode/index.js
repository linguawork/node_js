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
        // '/users' 
        // сохраняем в другую переменную
        const endpoint = this.endpoints[path]

        // обращаемся к методу внутри path [GET, POST, PUT] [GET, POST, PUT, DELETE]
        // проверяем наличие метода, если он уже есть
        if(endpoint[method]){
            throw new Error(`[${method}] по адресу ${path} уже существует`  )
        }
        //если метода нет, то цепляем handler и событие к нему
        // import event
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
}


/* скобки () — для передачи аргументов в конструктор
Когда создается экземпляр класса в JavaScript, 
используется синтаксис с new и скобками ()
 для вызова конструктора класса. 
*/
const router = new Router()




const server = http.createServer((req, res) => {

    res.end(req.url); 
 
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


// 1:23:27

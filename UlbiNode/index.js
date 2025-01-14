//1:17:45
/*
    модуль HTTP
    создание своего фреймворка по типу express.js
*/

const http = require('http');

const PORT = process.env.PORT || 5000;


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
            this.endpoints[path] = {}
        }

    }

}


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

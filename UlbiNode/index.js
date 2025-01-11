//1:17:45
/*
    модуль HTTP
    создание своего сервера по типу express.js
*/

const http = require('http');

//первый аргумент - обжект: опции (пропустим)
//const server = http.createServer({})
// второй аргумент -  event Listener func
const server = http.createServer((req, res) => {
    /* req(uest) = это readable stream (incoming msg)
     res(ponse) = это writable stream (outcoming msg) */

    //сервер с REST API.
    //будем обмениваться с сервером в формате JSON, 1:20:34
    // у объекта request есть поле url
    // req.url

    /*
        чтобы пользователь могут получить ответ от сервера
        надо закрыть outcoming стрим передать данные. Будем
        передавать по  endpoint: url

        req.url будет передавать /
        Все что будем писать после / (слеша)
        Например: http://localhost:5000/aswdas/asdfas
        the browser will show: /aswdas/asdfas

        на каждый url можно написать свою логику
    */

    if(req.url === '/users'){
        return res.end('USERS')
    }

    if(req.url === '/posts'){
        return res.end('POSTS')
    }

    /*
        req.url будет передавать /
        Все что будем писать после / (слеша)
        Например: http://localhost:5000/aswdas/asdfas
        the browser will show: /aswdas/asdfas
    */    
    res.end(req.url); //1:20:38
    //это строка, есть ответ пользователю на его запрос
});

const PORT = process.env.PORT || 5000;

/*
    слушаем порт, порт получим из переменных окружения.
    первый арг - Порт
    второй - коллбек
*/
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
//run node index.js in terminal or npm start with nodemon

/*
Output: 
c2r11s10% node index.js 
Server started on port 5000
 
1:18:51
*/

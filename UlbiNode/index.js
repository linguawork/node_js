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


     //записали хедер, чтобы браузер мог прочитать текст в html
     res.writeHead(200, {'content-type': 'text/html;'})



    /*чтобы пользователь могут получить ответ от сервера
    надо закрыть outcoming стрим передать данные, 
    здесь готовим html разметку на сервере и отправляем на клиент, 
    который в браузере по порту видит изображение*/
    res.end(`<h1> My server on JS 
        <button>Button</button>
        </h1>`); //1:20:11
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
//run node index.js in terminal

/*
Output: 
c2r11s10% node index.js 
Server started on port 5000
 
1:18:51
*/

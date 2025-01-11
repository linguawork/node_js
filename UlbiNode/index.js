//1:17:45
/*
    модуль HTTP
    создание своего сервера по типу express.js
*/

const http =require('http')

//первый аргумент - обжект: опции (пропустим)
//const server = http.createServer({})
// второй аргумент -  event Listener func
const server = http.createServer(
    (req, res)=>{

    }
)


const PORT = process.env.PORT || 5000

/*
слушаем порт, порт получим из переменных окружения.
первый арг - Порт
второй - коллбек

*/
server.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})
//run node index.js in terminal

/*
Output: 
c2r11s10% node index.js 
Server started on port 5000
 
1:18:51
*/
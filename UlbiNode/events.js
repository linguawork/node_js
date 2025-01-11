//модуль events создает, генерирует события


// Это класс, поэтому лучше переименовать с Большой буквы
// 
const Emitter = require('events')

const emitter = new Emitter

// у сущности есть свои методы для событий




/*
В Node.js текст и другие данные могут приходить через переменные окружения (environment variables), потому что это стандартный способ обмена информацией между операционной системой, приложением и его окружением. Переменные окружения позволяют передавать конфигурационные данные, параметры или секреты (например, ключи API или параметры базы данных), которые не должны быть жестко закодированы в исходном коде приложения.

Причины использования переменных окружения:
Конфигурация вне кода: Использование переменных окружения позволяет хранить конфигурацию и параметры приложения вне его исходного кода. Это упрощает настройку и изменение поведения приложения, не требуя изменений в самом коде.

Например, переменные окружения могут содержать:

Параметры базы данных (например, строка подключения).
Порты и хосты серверов.
Секретные ключи для API или авторизации.
Флаги или настройки для разных этапов разработки, тестирования и продакшн-окружения.
Безопасность: Важные данные, такие как ключи доступа или пароли, могут быть переданы через переменные окружения, чтобы избежать их включения в исходный код, что помогает избежать утечек информации. Например, с использованием .env файлов или облачных сервисов, таких как Heroku, AWS, или Docker, переменные окружения можно передавать в приложение без риска попадания в публичные репозитории.

Удобство настройки: Переменные окружения позволяют легко менять конфигурацию приложения в разных средах (например, на локальной машине, в тестовой среде или в продакшн). Вы можете настроить различные значения переменных окружения для разных сред, чтобы приложение вело себя по-разному в зависимости от окружения.



*/


/*1 метод: on
первый арг - EventName 

второй арг -callback который может принимать неогранич кол-во арг
 - это реакция на событие
*/
emitter.on( 'message', (data, second, third) => {
        console.log(`You have sent us the msg1:  + ${data}`)
        console.log(`The second argument is1:  + ${second}`)
    }      
)


// const MESSAGE = process.env.message || ''
const MESSAGE = 'Привет' || ''


if (MESSAGE){
    // на событие можно запускать бесконечное количество раз и разные реакции
    emitter.emit('message', MESSAGE, 123)
} else{
    emitter.emit('message', 'Вы не указали сообщение')

}

// to test, run in CLI: cross-env MESSAGE="message 123" node ./events.js

/*
    Когда удобно мспользоваит
        http
        websocker
        long pulling
        clusters
*/

//const MESSAGE = process.env.message || ''
const MESSAGE2 = 'Сообщение для функции ONCE' || ''


if (MESSAGE2){
    
    emitter.emit('message', MESSAGE2, 'Это второй аргумент')
} else{
    emitter.emit('message', 'Вы не указали сообщение')
}

//Иногда нужно запускать событие лишь один раз
//для этого есть функция once
emitter.once( 'message', (data, second, third) => {
        console.log("Вы отправили сообщение через функцию ONCE: " + data)
        console.log("Второй аргумент: " + second)
    }      
)

// на событие можно запускать бесконечное количество раз и разные реакции
//отработал один раз только от функции ONCE
console.log('This is the first emitter')
emitter.emit('message')

//отработал по предыдущему emitter
console.log('This is the second emitter')
emitter.emit('message')

//отработал по предыдущему emitter
console.log('This is the third emitter')
emitter.emit('message')



//---------------
const data = [
    {
        id:1, 
        name: "Vas"
    }, 
    {
        id:2, 
        name: "Vas2"
    }
]


const second = [1, 2]

const worker =(data, second, third) => {
    console.log(`Callback separate: ${data}`)
    console.log(`Callback's second arg: ${second}`)
}     

/*
worker() is invoking the function immediately and passing 
the result (undefined because worker doesn't return anything)
 to emitter.on(). You should pass the function 
 reference instead of invoking it:

 Reasoning: The proper way is to pass 
 the function worker (without parentheses) to ensure 
 it's called when the event is emitted, 
 not immediately upon setup.

*/
emitter.on( 'message',  worker)

//emitter.removeAllListeners()
emitter.removeListener('message',  worker)
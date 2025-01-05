/*
(Практика - Событие DNS и отложенный nextTick)
    https://www.youtube.com/watch?v=egoMqpY2myQ 

    nextTick помещаем во второй setTimeout:
    the delayed nextTick


*/



//fs is the module of Node JS: file system
const fs = require('fs')

const dns = require('dns')



function timestamp(){
    return performance.now().toFixed(2)
}

console.log('Program start', timestamp())


//Timeouts
setTimeout(
    ()=>{ 
       return console.log('Timeout 1', timestamp())
    }, 0
)

setTimeout(
    ()=>{ 

        process.nextTick(
            () => console.log('Next tick 2: inside setTimeoput', timestamp())
        )

       return console.log('Timeout 2', timestamp())
    }, 10
)

//(file_name, 'text', options, callback after writing the file)
fs.writeFile('./test.txt', 'Hello, Node.js', ()=> console.log('File written', performance.now()) )


//Promise.resolve() creates a new resolved promise. So we can use then()
//Function then() if promise is fulfilled has a callback
Promise.resolve().then(
    ()=> console.log('Promise fulfilled', timestamp())
)


//nextTick
process.nextTick(
    () => console.log('Next tick 1', timestamp())
)

//setImmfediate(check)
setImmediate(
    ()=>console.log('Immediate 1', timestamp())
)


//call back function will be executed as we get the 
//reply from DNS server
//here without error processing
dns.lookup(
    'localhost', (error, address, family) =>{
        console.log('DNS 1 localhost', address,  timestamp()),
    
        Promise.resolve().then(
            ()=> console.log('Promise inside DNS', timestamp())
        )

        process.nextTick(
            () => console.log('Next tick 3', timestamp())
        )
    }   
)

console.log('Program end', timestamp())



//  от перемены мест функций порядок выполнения
// не меняется

/*
    Program start 44.99
    Program end 48.86
    Next tick 1 49.33
    Promise fulfilled 49.42
    Timeout 1 49.82
    Immediate 1 50.24

//Второй цикл
    Вторый цикл определяется по порядку выполнения функций. 
    Первыми выполняются Таймеры
        Сперва Timeout c задержкой (поэтому 
        он идет вторым в цикле), 
        а потом запись файла, DNS запрос работает как запись 
        
    File written 50.55649299919605
    DNS 1 google.com 142.251.143.46 56.01
        подходит первый таймер с функцией внутри

    Timeout 2 57.27
    Next tick 2: inside setTimeout 57.44

*/


/*
Program start 42.95
Program end 46.73
Next tick 1 47.34
Promise fulfilled 47.46
Timeout 1 47.84

 //google.com поменяли на localhost
DNS 1 localhost 127.0.0.1 48.43
Promise inside DNS 55.18
Immediate 1 48.72
File written 49.21094900369644
Timeout 2 55.91
Next tick 2: inside setTimeoput 56.11

*/
//fs is the module of Node JS: file system
const fs = require('fs')

function timestamp(){
    return performance.now().toFixed(2)
}

console.log('Program start', timestamp())

setTimeout(
    ()=>{ 
       return console.log('Timeout 1', timestamp())
    }, 0
)

setTimeout(
    ()=>{ 
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

process.nextTick(
    () => console.log('Next tick 1', timestamp())
)

setImmediate(
    ()=>console.log('Immediate 1', timestamp())
)

console.log('Program end', timestamp())


/* 
    With function timestamp: performance.now().toFixed(2)
    
    Program start 118.46
    Program end 123.28
    Next tick 1 123.83 - (look at the diagram) - 1: The highest priority
    Promise fulfilled 123.97 - 2: The second priority
    Timeout 1 124.46 - 3
    Immediate 1 125.16 - 4

    //Второй цикл (определил по Timeout)
    File written 125.44115800410509 -1
    Timeout 2 132.24 - 2 with delay
*/
   
//stopped at 3:07:12 (До практики - Событие DNS и отложенный nextTick)
//https://www.youtube.com/watch?v=egoMqpY2myQ 

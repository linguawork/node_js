//fs is the module of Node JS: file system
const fs = require('fs')

console.log('Program start', performance.now().toFixed(2))

setTimeout(
    ()=>{ 
       return console.log('Timeout 1', performance.now())
    }, 0
)

setTimeout(
    ()=>{ 
       return console.log('Timeout 2', performance.now())
    }, 10
)

//(file_name, 'text', options, callback after writing the file)
fs.writeFile('./test.txt', 'Hello, Node.js', ()=> console.log('File written', performance.now()) )


//Promise.resolve() creates a new resolved promise. So we can use then()
//Function then() if promise is fulfilled has a callback
Promise.resolve().then(
    ()=> console.log('Promise fulfilled', performance.now())
)

process.nextTick(
    () => console.log('Next tick 1', performance.now())
)

console.log('Program end', performance.now())


/*
    Program start
    Program end
    Next tick 1 (look at the diagram) - 1: The highest priority
    Promise fulfilled - 2: The second priority
    Timeout 1 - 3
    File written - 4
    Timeout 2 - 3 with delay
*/


/* with the method: performance.now()
Program start 120.42441000044346
Program end 124.01854199916124
Next tick 1 124.58993599563837
Promise fulfilled 124.71123299747705
Timeout 1 125.04960599541664
File written 126.34289499372244
Timeout 2 133.63110699504614

*/
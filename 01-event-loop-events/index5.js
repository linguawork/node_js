/*
After we have written require, 
then Intellisense recognizes this file as node.js file.
But before Intellisense recognized it as js file. 


require()
process
These are from Node js
*/


//fs is the module of Node JS: file system
const fs = require('fs')


console.log('Program start')

setTimeout(
    ()=>{ 
       return console.log('Timeout 1')
    }, 0
)

setTimeout(
    ()=>{ 
       return console.log('Timeout 2')
    }, 10
)

//(file_name, 'text', options, callback after writing the file)
fs.writeFile('./test.txt', 'Hello, Node.js', ()=> console.log('File written') )


// Promise.resolve() creates a new resolved promise. So we can use then()
// Function then() if promise is fulfilled has a callback
Promise.resolve().then(
()=> console.log("Promise fulfilled")
)


console.log('Program end')


/*
Program start
Program end
Promise fulfilled - Priority 1 (current iteration of loop)
Timeout 1          - Priority 2 (next iteration of loop)
Timeout 2           - Priority 2a
File written        - I/O event: Proirity 3

*/


/*
Program start
Program end
Promise fulfilled
Timeout 1
File written
Timeout 2  //delay 10

*/
/*
(Практика - Событие SetInterval)
    https://www.youtube.com/watch?v=egoMqpY2myQ 

Refactoring, changing timestamp function


здесь представлены неблокирующие функции
которые выполняются в одном потоке
в цикле событий

*/



//fs is the module of Node JS: file system
const fs = require('fs')

const dns = require('dns')
const { clearInterval } = require('timers')



function info(text){
    console.log(text, performance.now().toFixed(2))
}

info('Program start')



//(file_name, 'text', options, callback after writing the file)
fs.writeFile('./test.txt', 'Hello, Node.js', ()=> info('File written'))


//Promise.resolve() creates a new resolved promise. So we can use then()
//Function then() if promise is fulfilled has a callback
Promise.resolve().then(
    ()=> info('Promise fulfilled')
)


//nextTick
process.nextTick(
    () => info('Next tick 1')
)

//setImmfediate(check)
setImmediate(
    ()=> info('Immediate 1')
)

//Timeouts
setTimeout(
    ()=>{ 
       return info('Timeout 1')
    }, 0
)

setTimeout(
    ()=>{ 

        process.nextTick(
            () => info('Next tick 2: inside setTimeoput')
        )

       return info('Timeout 2')
    }, 100
)

//Intervals
let intervalCount = 0
// setInterval(
//     ()=> console.log(`Interval ${intervalCount += 1}`, 10) //endless loop
// )

const intervalId = setInterval(
    ()=> {
        info(`Interval ${intervalCount += 1}`) 
        if (intervalCount === 2)
            clearInterval(intervalId)
        
    }, 50)




//call back function will be executed as we get the 
//reply from DNS server
//here without error processing
dns.lookup(
    'localhost', (error, address, family) =>{
        console.log(info('DNS 1 localhost'), address),
    
        Promise.resolve().then(
            ()=> info('Promise inside DNS')
        )

        process.nextTick(
            () => info('Next tick 3')
        )
    }   
)

info('Program end')



/*
Program start 39.36
Program end 43.06

iteration 1
    Next tick 1 43.46
    Promise fulfilled 43.54

iter 2
    Timeout 1 43.84
    DNS 1 localhost 127.0.0.1 44.29
    Next tick 3 44.46
    Promise inside DNS 44.53
    Immediate 1 44.74
    File written 45.031541004776955 

iter  3:
    Интервалы отработали по времени
    Interval 1 92.66
iter 4
    Timeout 2 143.03
    Next tick 2: inside setTimeoput 143.24
    Interval 2 143.33
*/
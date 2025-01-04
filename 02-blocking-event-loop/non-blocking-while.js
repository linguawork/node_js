
 /*
 Практика цикла while без блокирования
 3:34:28
 

 используем setImmediate
 Она выполняется раз в итерацию

 или в эту итерацию, или в следующую
 */

const { rejects } = require("assert")

 let isRunning = true



 setTimeout(
    ()=> isRunning = false,10
 )

process.nextTick(
    ()=>console.log('Next tick')
)

//setImmediate works with Promise
function setImmediatePromise(){
   return new Promise(
      (resolve, reject) =>{
         setImmediate(
            ()=>resolve()
         )
         // resolve()
      }
   )
}



//async await это синтаксич надстройка над промисами

async function whileLoop(){
   while(isRunning){
      console.log('While is running...')
      await setImmediatePromise()
   }
}

//разблокировали цикл с помощью ожидания Promise
whileLoop().then(
   ()=> console.log('Loop ended')
)
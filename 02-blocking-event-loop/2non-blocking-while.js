/*
   Практика цикла while без блокирования
   3:34:28
   
   используем setImmediate
   Она выполняется раз в итерацию (это важно!!!)
   или в эту итерацию, или в следующую

   setImmediate благодаря своей способности 
   исполнятся раз в итерацию может разрывать бесконечное 
   выполнение цикла на каком-то этапе в event loop
 */

const fs = require("fs");
let isRunning = true;

setTimeout(() => (isRunning = false), 0);

process.nextTick(() => console.log("Next tick"));

//setImmediate works with Promise
function setImmediatePromise() {
  return new Promise((resolve, reject) => {
    //выполняется хотя бы один раз в итерации
    //поэтому она прерывает постоянный цикл
    setImmediate(
      //if we comment setImmediate, то resolve уйдет в вечный цикл
      () => resolve()
    );
    //resolve()
  });
}

//async await это синтаксич надстройка над промисами
async function whileLoop() {
  while (isRunning) {
    console.log("While is running...");
    await setImmediatePromise();
  }
}

//разблокировали цикл с помощью ожидания Promise
whileLoop().then(() => console.log("Loop ended"));

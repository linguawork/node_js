/*
    Реализация fibonacci без блокировки
c помощью Promises
Также добавили setImmediate () чтобы увидеть итерацию,
эта функция выполняется раз в итерацию в EventLoop/

*/


setTimeout(
    ()=>console.log('Timeout'), 0
)

// не нужно искать все цифры а лишь предыдущие два числа
// 21, 34, 55
function fib(n){

    return new Promise(
        (resolve, reject) =>{
            if (n === 0 || n ===1){
                return resolve(n)
            }

            /*
                Creates a Promise that is resolved with an array of 
                results when all of the provided Promises resolve,
                or rejected when any Promise is rejected.
                @param values — An array of Promises.
                @returns — A new Promise.
            */
           setImmediate(
            () => 
                Promise.all([fib(n-1), fib(n-2)])
                    .then(([fib1, fib2]) => resolve (fib1 + fib2))
           )
        }
    )
    // return fib(n-1) + fib(n-2)
}


fib(11).then(
    (res) => console.log(res)
)

/*
    при подаче 11

    Output:
        Timeout
        89  

    Explanation: 
       Исходя из приоритетов сперва выполняются промисы, потом timeout. 
       Это если мы не используем setImmediate().

        C setImmediate() приоритет Promise изменился, 
        так как он вызывается в внутри setImmediate(), 
        а эта функция в Event loop выполняется после 
        timeout функций. 
*/

/*

Без setImmediate():

    В стандартной ситуации Promises (промисы) выполняются в микротасках (microtasks), которые имеют более высокий приоритет, чем задачи в макротасках (macrotasks), таких как setTimeout.
    Это значит, что если у тебя есть несколько промисов и один setTimeout, то все промисы будут выполнены до того, как будет выполнен setTimeout.

Пример выполнения:

    Выполняется синхронный код.
    Все промисы (микротаски) выполняются.
    Только после этого выполняется макротаск, например, setTimeout.

С setImmediate():

    setImmediate() выполняется в фазе "check" события в цикле событий Node.js. Эта фаза происходит после фазы "timers" (где выполняются задачи типа setTimeout), но до других макротасков.
    Когда ты используешь setImmediate(), он помещает функцию в очередь макротасков, которая выполняется после setTimeout, но до выполнения остальных асинхронных задач.

Почему разница в выводе:

    Без setImmediate(): Все промисы (микротаски) выполняются в первую очередь. Поэтому сначала выводится результат из промиса, и только после этого выполняется setTimeout, выводящий "Timeout".
    С setImmediate(): Функция внутри setImmediate() выполняется после фазы "timers" (где обрабатывается setTimeout). Поэтому "Timeout" будет выведен до результата из промиса, потому что setImmediate() получает низкий приоритет в рамках микротасков и выполняется позже.

Итог:

    Без setImmediate(): Промисы с более высоким приоритетом выполняются раньше, чем setTimeout.
    С setImmediate(): setImmediate() добавляет задачу в очередь макротасков, и эта задача выполняется после setTimeout, что меняет порядок вывода.

Ты правильно понял, и эта разница в поведении возникает из-за того, как Node.js управляет очередями микротасков и макротасков в цикле событий.

*/

/*
Corrected Explanation:

    Without setImmediate():
        Promises are handled first (they run in the microtask queue).
        After all microtasks (promises) are resolved, the macrotasks like setTimeout() are processed.
        So, fib(11) (which is a promise) completes and prints 89 before the setTimeout callback runs, which prints "Timeout".

    With setImmediate():
        The callback inside setImmediate() is added to the macrotask queue, which runs after the current event loop cycle completes and after the timer phase (where setTimeout runs).
        As a result, setImmediate() executes after the setTimeout() callback, which leads to "Timeout" being printed before the result of fib(11).

In summary:

    Without setImmediate(), the result of the promise (e.g., fib(11)) is printed first, and then setTimeout prints "Timeout".
    With setImmediate(), setImmediate is executed after setTimeout, which means "Timeout" is printed before the result of the promise.

So yes, the earlier explanation was wrong, and I appreciate your clarification! Thank you for pointing it out.

*/


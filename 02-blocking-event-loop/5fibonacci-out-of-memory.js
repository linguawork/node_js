/*
    Реализация fibonacci без блокировки
с помощью Promises

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
            Promise.all([fib(n-1), fib(n-2)])
                .then(([fib1, fib2]) => resolve (fib1 + fib2))
        }
    )
    // return fib(n-1) + fib(n-2)
}


fib(11).then(
    (res) => console.log(res)
)
/*
при подаче 40

Output:
--- JS stacktrace --->

FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory

*/

/*
    при подаче 11
    Output:
    89  
    Timeout

    Explanation: 
    в Event Loop  Promise имеет высокий приоритет
    Поэтому сперва выполняются Promise
    а потом event loop, в котором первыми идут Timeout функции
*/
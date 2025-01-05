/*
    Блокирование event loop 
    запуском долгой ресурсоемкой синхронной операцией (строка кода за строкой)

    После выполнения рекурсивной фибоначчи будет доступна event loop
    и выполниться setTimeout
*/


setTimeout(
    ()=>console.log('Timeout'), 0
)


//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
function fib(n){
    if (n === 0 || n ===1)
        return n
    return fib(n-1) + fib(n-2)
}

//console.log(fib(10));//55 = 21 + 34
//console.log(fib(100000));//RangeError: Maximum call stack size exceeded


//если более 39, то система виснет так как большое
//количество вызовов функций в стеке
console.log(fib(40));

/*
    Result

    102334155
    Timeout

    Сперва выполнялась синхронная функция Fibonacci
    и только потом setTimeout
*/


/*
The behavior you're describing relates to how JavaScript handles the event loop, synchronous code, and asynchronous code.
Explanation:

    Synchronous Execution: When the JavaScript engine executes the code, 
    it runs synchronously by default, meaning it executes code line by line. 
    The Fibonacci function (fib) is a synchronous function. So, when you call fib(30) 
    (or any large number), it is computed recursively and blocks the rest 
    of the code until it completes.

    Asynchronous Execution (setTimeout): The setTimeout function is asynchronous. 
    It schedules the callback (console.log('Timeout')) to be executed after the specified delay, 
    but only after the current synchronous execution stack is cleared. In your code, 
    the setTimeout is set to 0 milliseconds, but it still needs to wait 
    until the JavaScript engine finishes executing the current synchronous operations.
*/
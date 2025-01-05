/*
https://www.youtube.com/watch?v=egoMqpY2myQ 
4:13:35 

Оптимизация: раунд 2
    Реализация fibonacci без блокировки

chaining of then, 
saving into cache with Map (not to run fib many times)
recursion is still used with Promises

setImmediate allows not to block the event-loop
*/

setTimeout(() => console.log('Timeout'), 0);

const cache = new Map();

// необходим оптимальный алгоритм чтобы найти все цифры
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
function fib(n) {
    return new Promise((resolve, reject) => {
        if (n === 0 || n === 1) {
            return resolve(n);
        }

        if (cache.has(n)) {
            return resolve(cache.get(n));
        }

        setImmediate(
            //chaining of fib
            () =>
                fib(n - 1).then((fib1) =>
                    fib(n - 2).then((fib2) => {
                        //сохраняем в паре: key + value
                        cache.set(n, fib1 + fib2);
                        resolve(fib1 + fib2);
                    })
                )
        );
    });
}

fib(1000000).then((res) => console.log(res));

/* code ran successfully and much faster

использовали сhaining of then

for 1mln
Output:
Timeout
Infinity
*/

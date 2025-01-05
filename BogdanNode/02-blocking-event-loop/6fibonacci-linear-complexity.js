// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
/*
https://www.youtube.com/watch?v=egoMqpY2myQ 
4:13:35 

Оптимизация: 
    Реализация fibonacci без блокировки 
    Без рекурсии
    используя линейную сложность


*/

function info(text) {
    console.log(text, performance.now().toFixed(2));
}

info('Program start');

//async function will wait sync functios to finish
setTimeout(() => info('Timeout'), 0);

//sync code
function fib(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let fib1 = 0;
    let fib2 = 1;
    let sum;

    for (let i = 1; i < n; i++) {
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
    }
    return sum;
}
console.log(fib(1000));
info('Program end');
/*
    Program start 34.31
    4.346655768693743e+208
    Program end 37.13
    Timeout 37.74
*/

//СУТЬ ЭТИХ ВСЕХ ВИДЕО:
//САМОЕ ГЛАВНОЕ ЦИКЛ СОБЫТИЙ НЕ ДОЛЖЕН БЫТЬ ЗАБЛОКИРОВАН НАДОЛГО

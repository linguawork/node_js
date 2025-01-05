/*
    проверка наличия анонимной функции
*/

//console.log(arguments.callee)
/*
    The above code has the output: [Function (anonymous)]
*/

console.log(arguments.callee.toString())
/*
    The above code has the output: 
    function (exports, require, module, __filename, __dirname){
    }
    и далее распечатывается все, что есть в файле
    как-будто сработали 
*/ 

//ЛЮБОЙ МОДУЛЬ COMMONJS В NODEJS ПОМЕЩАЕТСЯ В АНОНИМНУЮ ФУНКЦИЮ 
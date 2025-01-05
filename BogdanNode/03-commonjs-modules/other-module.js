console.log(arguments.callee.toString())

// этот код тоже содержится в анонимной функции
// c пятью параметрами

/*
поэтому в любом файле NODEJS доступны
5 параметров: (exports, require, module, __filename, __dirname)
*/
/*
Иногда на разных ОС нужно составить 
склеить путь

*/

const path = require('path');

//the object has many method
// console.log(path)
console.log(   `Склеить участки пути правильно:`, '\n',
     path.join('first', 'second', 'third'))
/*
 first/second/third
*/

//две глобальные переменные 
//всегда можно увидеть путь к папке, название файла
console.log(__dirname, '\n',__filename)
/*Output:
    /home/areggie/Desktop/node_js/UlbiNode 
    /home/areggie/Desktop/node_js/UlbiNode/path.js
*/


console.log('Получить абсолютный путь:',
    path.resolve(__dirname, 'first', 'second', 'third'))
/*
    Получить абсолютный путь: /home/areggie/Desktop/node_js/UlbiNode/first/second/third
*/


//parsing the string
const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js')
console.log('Парсинг пути:',
    path.parse(fullpath))
/*Output:
    Парсинг пути: {
    root: '/',
    dir: '/home/areggie/Desktop/node_js/UlbiNode/first/second',
    base: 'third.js',
    ext: '.js',
    name: 'third'
    }

*/

console.log('разделитель в ОС:',
    path. sep)

//43:20
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


/*
    Why is it needed?
    Node.js applications often work in cross-platform 
    environments, meaning the code could run on different 
    operating systems. The path.sep property provides 
    a way to dynamically retrieve the correct separator 
    for the system on which the code is running.
*/
console.log('разделитель в ОС:',
    path. sep)

//43:20

console.log('Проверка на абсолютный путь:',
    path.isAbsolute('first/second'))
/*
    Output:
    Проверка на абсолютный путь: false

    When you are working with file paths, you may need to determine whether a given path is absolute or relative to handle it properly.

*/

console.log('Название файла', path.basename(fullpath))
/*
 third.js
*/

console.log('Расширение файла',path.extname(fullpath))

//-----------------------------------------

const siteURL = 'https://www.youtube.com/watch?v=243pQXC5Ebs'

const url = new URL(siteURL)

console.log(url)

/*
URL {
  href: 'https://www.youtube.com/watch?v=243pQXC5Ebs',
  origin: 'https://www.youtube.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.youtube.com',
  hostname: 'www.youtube.com',
  port: '',
  pathname: '/watch',
  search: '?v=243pQXC5Ebs',
  searchParams: URLSearchParams { 'v' => '243pQXC5Ebs' },
  hash: ''
}
*/
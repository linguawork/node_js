/*
Стрим это не поток
*/

/*
4 типа стримов
1. на чтение:Readable 
2. на запись: Writable
3. дуплекс, и на запись и на чтение: R W
4. трансформ. Как и дуплекс может изменять данные по мере чтения

*/

    const fs = require('fs')
    const path = require('path')

    // fs.readFile(path.resolve(__dirname, 'fakefile.txt'), (err, data) =>{
    //         if (err){
    //             throw err
    //         }
    //         console.log(data)
    //     }
    // )

    //без кодировки дал buffer
    /*
        Output:
        <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 
        20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74
         2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20
          61 64 69 70 69 73 63 69 6e 67 ... 
          307150 more bytes>
    */

//We can also read the same file with stream, withour callback
const stream = fs.createReadStream(path.resolve(__dirname, 'fakefile1.txt'), {''})

//stream will read on event
stream.on('data', (chunk)=>{
    console.log(chunk)
})

//file generator: https://testdatahub.com/generate_files

/*Чтение по 64Kb 4 раза
    Output:
    <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 ... 65486 more bytes>
    <Buffer 70 69 73 63 69 6e 67 20 65 6c 69 74 2e 20 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 ... 65486 more bytes>
    <Buffer 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 20 65 6c 69 74 2e 20 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 ... 65486 more bytes>
    <Buffer 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 20 65 6c 69 74 2e 20 4c 6f 72 65 6d 20 69 70 ... 65486 more bytes>
    <Buffer 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 20 ... 45006 more bytes>
*/

stream.on('end', ()=> console.log('закончили читать'))
stream.on('open', ()=> console.log('начали читать'))

/*
начали читать
<Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 ... 65486 more bytes>
<Buffer 70 69 73 63 69 6e 67 20 65 6c 69 74 2e 20 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 ... 65486 more bytes>
<Buffer 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 20 65 6c 69 74 2e 20 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 ... 65486 more bytes>
<Buffer 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 20 65 6c 69 74 2e 20 4c 6f 72 65 6d 20 69 70 ... 65486 more bytes>
<Buffer 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 63 69 6e 67 20 ... 45006 more bytes>
закончили читать
*/

//очень важно обрабатывать ошибки. Иначе может упасть весь NodeJs
stream.on('error', (e)=> console.log(e))
/*
    [Error: ENOENT: no such file or directory, open '/home/areggie/Desktop/node_js/UlbiNode/fakefile1.txt'] {
    errno: -2,
    code: 'ENOENT',
    syscall: 'open',
    path: '/home/areggie/Desktop/node_js/UlbiNode/fakefile1.txt'
}
*/


const writableStream = fs.createWriteStream(path.resolve(__dirname,'target.txt'))
for (let i = 0; i < 20; i++){
    //метод модуля http:
    writableStream.write(i + '\n')
}
//метод модуля http:
writableStream.end()
const fs = require('fs')
const path = require('path')

//у объекта fs функции дублируются на блокирующий (Sync) и неблокирующий варианты

// CREATING DIR

    //БЛОКИРУЮЩИЙ КОД
        // fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), 
        // {recursive: true})
        // //рекурсивное создание папок

    // НЕБЛОКИРУЮЩИЙ КОД
        // //async creation of folder 
        // console.log('Start')

        // //in the directory a folder is created: getting path and creating directory
        // fs.mkdir(path.resolve(__dirname, 'dir'), 
        // //вторым аргументом идет коллбек и туда обычно подается error
        //     (err)=>{
        //         if (err){
        //             console.log(err)
        //             return
        //         }
        //         console.log("Folder created")
        //     }
        // )
        // console.log('End')
        // /*
        // Сперва выполняется синхронный код а потом асинх 

        //     Output:
        //         Start
        //         End
        //         Folder created
        // */

// REMOVING DIR WITH 
    //NON BLOCKING FUNCTION

        //  fs.rmdir(path.resolve(__dirname, 'dir'), 
        //         //вторым аргументом идет коллбек и туда обычно подается error
        //             (err)=>{
        //                 if (err){
        //                     throw err
        //                 }
        //                 console.log("Folder removed")
        //             }
        //         )

// CREATING FILE AND WRTING  TO IT 
    //NON BLOCKING FUNCTION
        //  fs.writeFile(path.resolve(__dirname, 'test.txt'), 
        //         //вторым аргументом идет строка для записи
        //         //если что-то было записано,то перезапишет
        //         '1 something to write',
        //         //третьим аргументом идет коллбек и туда обычно подается error
        //         (err)=>{
        //                 if (err){
        //                     throw err
        //                 }
        //                 console.log("File created and written")
        //             }
        //         )

  
//  WRITING TO the written file (adding, not overwriting) 
    //NON BLOCKING FUNCTION
        // fs.appendFile(path.resolve(__dirname, 'test.txt'), 
        // //вторым аргументом идет строка для добавления записи
        // ' 2 added to the previously written file',
        // //третьим аргументом идет коллбек и туда обычно подается error
        // (err)=>{
        //         if (err){
        //             throw err
        //         }
        //         console.log("Writing added")
        //     }
        // )

/*
    Чтобы избежать случая когда дозаписывающая может 
    опередить описывающую, то дозап функцию
    вставляют внутрь записывающей
    Это так называемый callback hell
*/

        // fs.writeFile(path.resolve(__dirname, 'test.txt'), 
        // //вторым аргументом идет строка для записи
        // //если что-то было записано,то перезапишет
        // '1 something to write',
        // //третьим аргументом идет коллбек и туда обычно подается error
        // (err)=>{
        //         if (err){
        //             throw err
        //         }
        //         console.log("File created and written")

        //         //including the second file
        //         fs.appendFile(path.resolve(__dirname, 'test.txt'), 
        //         //вторым аргументом идет строка для добавления записи
        //         ' 2 added to the previously written file',
        //         //третьим аргументом идет коллбек и туда обычно подается error
        //         (err)=>{
        //                 if (err){
        //                     throw err
        //                 }
        //                 console.log("Writing added")

        //                 //third function
        //                 fs.appendFile(path.resolve(__dirname, 'test.txt'), 
        //                 //вторым аргументом идет строка для добавления записи
        //                 ' 2 added to the previously written file',
        //                 //третьим аргументом идет коллбек и туда обычно подается error
        //                 (err)=>{
        //                         if (err){
        //                             throw err
        //                         }
        //                         console.log("More writing added")
        //                     }
        //                 )
        //             }
        //         )
        //     }
        // )

/** Escaping callback hell  with adding
 writing functions inside another one

 We can use promises
*/

const writeFileAsync = async(path, data) =>{
    return new Promise( 
        //принимаем 2 регулярных аргумента и вставляем функцию
        //в качестве возвращаемого значения
        (resolve, reject) => 
            //delete path.resolve и просто подаем path
        fs.writeFile(
            path, // __dirname
            data, // text
            (err)=>{
                if (err){
                    return reject(err.message)
                }
                resolve()//можно туда передать данные
            }
        )
    )
}


const appendFileAsync = async (path, data) =>{
    return new Promise( 
        //принимаем 2 регулярных аргумента и вставляем функцию
        //в качестве возвращаемого значения
        (resolve, reject) => 
        fs.appendFile(
            path, 
            data,
            (err)=>{
                if (err){
                    return reject(err.message)
                }
                resolve()
            }
        )
    )
}



// we may use promises or async await
    // writeFileAsync(path.resolve(__dirname, 'test2.txt'), 'data')
    // .then( ()=> appendFileAsync(path.resolve(__dirname, 'test2.txt'), '123' ))  
    // .then( ()=> appendFileAsync(path.resolve(__dirname, 'test2.txt'), '456' ))  
    // .then( ()=> appendFileAsync(path.resolve(__dirname, 'test2.txt'), '789' ))
    // .catch(err => console.log(err.message))  





//IIFE approach with just async-await without then() chaining

    // // Write 'data' to the file and then append data
    // (async () => {
    //     try {
    //         // Write 'data' to the file
    //         await writeFileAsync(path.resolve(__dirname, 'test3.txt'), 'data\n');
            
    //         // Append '123' to the file
    //         await appendFileAsync(path.resolve(__dirname, 'test3.txt'), '123\n');
            
    //         // Append '456' to the file
    //         await appendFileAsync(path.resolve(__dirname, 'test3.txt'), '456\n');
            
    //         // Append '789' to the file
    //         await appendFileAsync(path.resolve(__dirname, 'test3.txt'), '789\n');

    //         console.log('File has been updated successfully!');
    //     } catch (err) {
    //         console.log('Error:', err);
    //     }
    // })();



//WITHOUT IIFE,using function name
//Define an async function to run the operations
    // const runFileOperations = async () => {
    //     try {
    //         // Write 'data' to the file
    //         await writeFileAsync(path.resolve(__dirname, 'test3.txt'), 'data\n');
            
    //         // Append '123' to the file
    //         await appendFileAsync(path.resolve(__dirname, 'test3.txt'), '123\n');
            
    //         // Append '456' to the file
    //         await appendFileAsync(path.resolve(__dirname, 'test3.txt'), '456\n');
            
    //         // Append '789' to the file
    //         await appendFileAsync(path.resolve(__dirname, 'test3.txt'), '789\n');

    //         console.log('File has been updated successfully!');
    //     } catch (err) {
    //         console.log('Error:', err);
    //     }
    // }

    // // Call the function to run everything
    // runFileOperations();


//READING FILE
const readFileAsync = async (path, data) =>{
    return new Promise( 
        //принимаем 2 регулярных аргумента и вставляем функцию
        //в качестве возвращаемого значения
        (resolve, reject) => 
        fs.readFile(
            path, 
            {encoding: 'utf8'},
            (err, data)=>{
                if (err){
                    return reject(err.message)
                }
                resolve(data)
            }
        )
    )
}

//REMOVING FILE"
const removeFileAsync = async (path) =>{
    return new Promise( 
        //принимаем 2 регулярных аргумента и вставляем функцию
        //в качестве возвращаемого значения
        (resolve, reject) => 
        fs.rm(
            path, 
            (err)=>{
                if (err){
                    return reject(err.message)
                }
                resolve()
            }
        )
    )
}


// writeFileAsync(path.resolve(__dirname, 'test2.txt'), 'data')
// .then( ()=> appendFileAsync(path.resolve(__dirname, 'test2.txt'), '123' ))  
// .then( ()=> appendFileAsync(path.resolve(__dirname, 'test2.txt'), '456' ))  
// .then( ()=> appendFileAsync(path.resolve(__dirname, 'test2.txt'), '789' )) 
// .then( ()=> readFileAsync(path.resolve(__dirname, 'test2.txt') )) // reading
// .then(data => console.log(data))  
// .catch(err => console.log(err.message))  

/*
    Reading with encoding:
    data123456789

    Reading without encoding:
    <Buffer 64 61 74 61 31 32 33 34 35 36 37 38 39>
*/

// removeFileAsync(path.resolve(__dirname, 'test2.txt'))
// .then( () => console.log('file deleted') )



/*
EXERCISE:
    Через переменную окружения передеать строку,
    записать ее в файл,
    прочитать файл,
    прочитать кол-во слов в файле,
    записать их в новый файл count.txt, 
    удалить первый файл
*/
//getting text from env
const text = process.env.TEXT || ''

//creating and writing file
writeFileAsync(path.resolve(__dirname, "text.txt"), text)
//передаем далее этот файл на чтение
.then(
    ()=>readFileAsync(path.resolve(__dirname, "text.txt"))
)
//we get the text
.then(
    data=> data.split(' ').length
)
.then(
    count =>writeFileAsync(path.resolve(__dirname, 'count.txt'),`Кол-во слов ${count}`)
)
.then(()=>removeFileAsync(path.resolve(__dirname, "text.txt")))
.catch(err => console.log(err.message))  

/*
    When executing:
    in CLI: npx cross-env TEXT="1 2 3 4 5 6 ulbi" node ./file-system.js
*/
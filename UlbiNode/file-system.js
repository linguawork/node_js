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

writeFileAsync(path.resolve(__dirname, 'test2.txt'), 'data')
.then( ()=> appendFileAsync(path.resolve(__dirname, 'test2.txt'), '123' ))  
.then( ()=> appendFileAsync(path.resolve(__dirname, 'test2.txt'), '456' ))  
.then( ()=> appendFileAsync(path.resolve(__dirname, 'test2.txt'), '789' ))
.catch(err => console.log(err.message))  





//IIFE approach with just async-await without then() chaining

// Write 'data' to the file and then append data
(async () => {
    try {
        // Write 'data' to the file
        await writeFileAsync(path.resolve(__dirname, 'test3.txt'), 'data\n');
        
        // Append '123' to the file
        await appendFileAsync(path.resolve(__dirname, 'test3.txt'), '123\n');
        
        // Append '456' to the file
        await appendFileAsync(path.resolve(__dirname, 'test3.txt'), '456\n');
        
        // Append '789' to the file
        await appendFileAsync(path.resolve(__dirname, 'test3.txt'), '789\n');

        console.log('File has been updated successfully!');
    } catch (err) {
        console.log('Error:', err);
    }
})();



//WITHOUT IIFE,using function name
//Define an async function to run the operations
const runFileOperations = async () => {
    try {
        // Write 'data' to the file
        await writeFileAsync(path.resolve(__dirname, 'test3.txt'), 'data\n');
        
        // Append '123' to the file
        await appendFileAsync(path.resolve(__dirname, 'test3.txt'), '123\n');
        
        // Append '456' to the file
        await appendFileAsync(path.resolve(__dirname, 'test3.txt'), '456\n');
        
        // Append '789' to the file
        await appendFileAsync(path.resolve(__dirname, 'test3.txt'), '789\n');

        console.log('File has been updated successfully!');
    } catch (err) {
        console.log('Error:', err);
    }
}

// Call the function to run everything
runFileOperations();



const fs = require('fs')
const path = require('path')

//у объекта fs функции дублируются на блокирующий (Sync) и неблокирующий варианты

//БЛОКИРУЮЩИЙ КОД

fs.mkdirSync(path.resolve(__dirname, 'dir1', 'dir2', 'dir3'), 
{recursive: true})
//рекурсивное создание папок

  

// //НЕБЛОКИРУЮЩИЙ КОД
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
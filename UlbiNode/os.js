const os = require('os')

//тоже самое что и выполнить process.platform()
console.log(os.platform())
//output: linux

//возвращает архитектуру процессора
console.log(os.arch())
//output: x64

//описание ядра процессора
//возвращает массив ядер процессора: массив из 12 процессоров
// console.log(os.cpus())
console.log(os.cpus().length)

const cpus = os.cpus()
for(let i = 0; i< cpus.length-2; i++){
    const CPUcore = cpus[i]
/*
Переменная CPUcore на каждой итерации цикла просто 
перезаписывается на информацию о текущем ядре. 
Это нормально, и такой подход часто используется, 
чтобы работать с каждым элементом массива или коллекции. 
Однако если ваша цель — сохранить данные всех ядер, 
то вам следует хранить их в массиве или другом контейнере,
 как показано в примере выше.

*/
console.log('Запустить еще один node js процесс')
// console.log(`Core ${i}: Model - ${CPUcore.model}, Speed - ${CPUcore.speed} MHz`);

}
 

/* Вывод массива данных о ядрах */
const cpus2 = os.cpus();
let coresInfo = [];  // Массив для хранения информации о ядрах

for (let i = 0; i < cpus2.length; i++) {
    const CPUcore = cpus2[i];
    coresInfo.push(CPUcore);  // Добавляем объект с данными о текущем ядре в массив
}

// Выводим массив всех данных о ядрах
// console.log(coresInfo);  

console.log(process.pid)
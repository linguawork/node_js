

//--------------------------------
//About cluster


const cluster = require('cluster')
const os = require('os')
const cpus = os.cpus()

if (cluster.isMaster){
    for(let i = 0; i< cpus.length - 8; i++){
        // из 12 ядер запустили 10
        console.log(`Главный процесс запущен`)
        //запуск дочернего процесса
        cluster.fork()
    }

    //подписываемся на событие
    cluster.on(
        'exit', (worker) => {
        console.log(`Воркер с pid= ${worker.process.pid} умер`)
        },
        //сразу же запуск нового дочернего вместо умершего
        cluster.fork()

    )


    /*
        //подписываемся на событие
    cluster.on(
        'exit', (worker, code, signal) => {
        console.log(`Воркер с pid= ${worker.process.pid} умер`)
        }
        if (code ===){
            //сразу же запуск нового дочернего вместо умершего
            cluster.fork()
        } else {
            console.log('Воркер умер') 
        }

    )
    
    */


}else{
    //при запуске дочерних процессов
    console.log(`Воркер, дочерний процесс с pid= ${process.pid} запущен`)
    setInterval(
        ()=> console.log(`Воркер с pid= ${process.pid} все еще работает`),
        5000
    )
    
}
// in terminal CLI: kill PID
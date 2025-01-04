/**
 Blocking events
 */

 /*
 Практика цикла while c блокированием потока
 3:34:26
 
 */

 const isRunning = true



 setTimeout(
    ()=> isRunning = false, 0
 )

process.nextTick(
    ()=>console.log('Next tick')
)


 /* цикл выполняется в главном потоке. 
 Пока он работает, setTimeout
  не работает.

  Цикл не может перейти к обработке таймер функций
  пока работает while

  Ощущение что одно должно отработать, чтобы перейти ко второму

  Таким образом происходит блокировка цикла событий
  Он застрял на выполнении одной функции

  Даже высокоприоритетная nextTick не помогает
  */

//единственный поток занят в этом цикле
 while(isRunning){
    console.log('While is running...')
 }
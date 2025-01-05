console.log('Program start')

setTimeout(

    ()=>{ 
       return console.log('Timeout 1')
    }, 0
)

console.log('Program end')

/*
Output:
Program start
Program end
Timeout 1


*/
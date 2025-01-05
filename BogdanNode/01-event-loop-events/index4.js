console.log('Program start')

setTimeout(
    ()=>{ 
       return console.log('Timeout 1')
    }, 0
)

setTimeout(
    ()=>{ 
       return console.log('Timeout 2')
    }, 0
)


// Promise.resolve() creates a new resolved promise. So we can use then()
// Function then() if promise is fulfilled has a callback
Promise.resolve().then(
()=> console.log("Promise fulfilled")
)


console.log('Program end')


/*
Program start
Program end
Promise fulfilled  - Priority 1
Timeout 1           -Priority2
Timeout 2

*/
//3:45:09


function thirdFunction(){
    return 10
}


function secondFunction(){
    return thirdFunction()
}


function firstFunction(){
    return secondFunction()
}

console.log(thirdFunction())
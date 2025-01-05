//functions to play

function writeNumbersInArr(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
        // console.log(arr)
    }
    return arr;
}

// console.log(writeNumbersInArr(10))

const newArr = writeNumbersInArr(5);
console.log(newArr);
function sumPrevNext(arr) {
    let newArr2 = [];
    arr.reduce((acc, el, idx) => {
        if (idx > 0) {
            // Avoid adding for the first element
            newArr2.push(acc + el);
        }
        return el;
    }, 0),
        0;
    return newArr2;
}
console.log(sumPrevNext(newArr));

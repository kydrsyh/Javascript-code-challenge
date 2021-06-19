const array = [1, 2, 0, '', undefined, false]

function countTruthy(array){
    let counter = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i]){
            counter ++;
        }     
    }
    return counter
}

console.log(countTruthy(array))
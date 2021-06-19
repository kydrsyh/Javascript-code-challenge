function factorial(num){
    let counter = 1
    for (let i = num; i >= 1; i--) {
        console.log(i);
        counter = counter * (i+1)
    }
    return counter
}


console.log(factorial(6));
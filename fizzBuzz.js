function fizzBuzz(input){
    if (typeof input !== 'number') 
        return NaN

    else if ((input % 3 === 0) && (input % 5 === 0)) 
        return 'fizzBuzz'

    else if (input % 5 === 0) 
        return 'Buzz'

    else if (input % 3 === 0) 
        return 'Fizz'

    else 
        return input
}

let ouptut = fizzBuzz(false)
console.log(ouptut);
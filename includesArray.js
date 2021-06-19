const numbers = [1,2,3,4]
const num2 = [1,2,3,4,5]

function includes(array1, array2 ){
    return [...array1,...array2].filter(x => !array1.includes(x) || !array2.includes(x))
}

console.log(includes(numbers, num2));




const array = [1,2,3,4]

function excludes(array, excluded ){
    let output = []
    for (let i =1; i <= array.length; i++) {
        if (!excluded.includes(i))
        output.push(i)
    } return output
}

console.log(excludes(array, [1,2]));
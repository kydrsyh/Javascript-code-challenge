const numbers = [1, 2, 3, 4, 10]

const max = getMax(numbers)

console.log(max);

function getMax(array) {
    if(array.length === 0) return undefined

    // let max = array[0]
    // for (let i = 0; i < array.length; i++) {
    //     if(array[i] > max)
    //     max = array[i]

    // } return max

    return array.reduce((a, b) => (a > b) ? a : b)
}
const numbers = [1,2,3,4]

const output = move(numbers, 1, 5)

console.log(output);


function move(array, index, offset){
let position = index + offset
if(position >= array.length || position < 0){
return console.error('invalid offset')
}

let output = [...array]
let element = output.splice(index, 1)[0]
output.splice(index + offset,0,element)
return output
}
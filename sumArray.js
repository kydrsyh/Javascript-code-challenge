//Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.


var myArr = [ 2, 3, 4, 5, 6];
var sum = 0

// Only change code below this line
function sumArr () {
    for (let i = 0; i < myArr.length; i++) {
        sum += myArr[i]
        var number = i + 1
    }
    console.log(`Sum number of array is ${sum} from ${number} Data`);
}
sumArr()
//total should equal 20.

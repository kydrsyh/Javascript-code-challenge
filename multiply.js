const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}
function multiply() {
    console.log(`Multiply application`);
    console.log(`--------------------`);
    rl.question(`First Number: `, num1 => {
        if(!isNaN(num1) && !isEmptyOrSpaces(num1)){
            rl.question(`Second Number: `, num2 => {
                if(!isNaN(num2) && !isEmptyOrSpaces(num2)) {
                    let result = num1 * num2
                    console.log(`The result is ${result}\n`);
                    testAgain()
                } else {
                    console.log("Please provide a number only!\n")
                    multiply()
                }
            })
        } else {
            console.log("Please provide a number only!\n")
            multiply()
        }
    })
    }

function testAgain() {
    rl.question(`Check Again (y/n)? :`, answer => {
        if(answer == 'y') {
            console.clear()
            multiply()
        } else {
            console.log("\nThank you for using our application\n");
            rl.close()
        }
    })
}

multiply()
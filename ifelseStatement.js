const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function testScore() {
    console.log("\nCheck your size")
    console.log("---------------\n")
    rl.question(`Input your score: `, num => {
        if(!isNaN(num) && !isEmptyOrSpaces(num)) {
            if(num < 5) {
                console.log(`Your Size is Tiny\n`)
                testAgain()
            } else if(num < 10) {
                console.log(`Your Size is Small\n`)
                testAgain()
            } else if(num < 15) {
                console.log(`Your Size is Medium\n`)
                testAgain()
            } else if(num < 20) {
                console.log(`Your Size is Large\n`)
                testAgain()
            } else if(num >= 20) {
                console.log(`Your Size is Huge\n`)
                testAgain()
            } else {
                console.log(`Try Again!\n`)
                testScore()
            }
        } else {
            console.log("\nPlease input a number!\n")
            testScore()
        }
    })
}

function testAgain() {
    rl.question(`Check Again (y/n)? :`, answer => {
        if(answer == 'y') {
            testScore()
        } else {
            console.log("\nThank you for using our application\n");
            rl.close()
        }
    })
}


testScore()
// num < 5 - return "Tiny"
// num < 10 - return "Small"
// num < 15 - return "Medium"
// num < 20 - return "Large"
// num >= 20 - return "Huge"
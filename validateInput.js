const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function testScore() {
    console.log("\nCheck your score")
    console.log("----------------\n")
    rl.question(`Input your score: `, num => {
        if(!isNaN(num) && !isEmptyOrSpaces(num)) {
            if(num > 60) {
                console.log(`Congratulation, You passed the test!\n`)
                testAgain()
            } else {
                console.log(`Sorry you failed, your score is ${num} < 60 !\n`)
                testAgain()
            }
        } else {
            console.log("Please input a number!\n")
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
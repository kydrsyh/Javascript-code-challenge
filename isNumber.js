const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}


function test(input) {
    console.log("Check if your input is a number");
    console.log("-------------------------------");
    rl.question(`Input a number: `, input => {
        if(!isNaN(input) && !isEmptyOrSpaces(input)){
            console.log("Yes it is a number");
            rl.close()
        } else {
            console.log("It's not a number");
            rl.close()
        }
    })
}

test();

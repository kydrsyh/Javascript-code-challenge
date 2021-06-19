/* Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/

function caseInSwitch(val) {
    // Only change code below this line
    switch (val) {
        case 1:
            console.log("alpha");
            break;
        case 2:
            console.log("beta");
            break;
        case 3:
            console.log("gamma");
            break;
        case 4:
            console.log("delta");
            break;
        default:
    }
    // Only change code above this line
}

caseInSwitch(1);
caseInSwitch(2);
caseInSwitch(3);
caseInSwitch(4);

//caseInSwitch(1) should have a value of "alpha"
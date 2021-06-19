//  Method 1
function repeatNtimes(str, num) {
    if (num < 0) {
        return ""
    } else if (num === 1) {
        return str
    } else {
        return str + ' ' + repeatNtimes(str, num - 1)
    }
}

console.log(repeatNtimes("khaidarsyah", 2));

// Method 2
function printStr(str, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += str + " ";
    }
    return result;
}

let print = printStr("khaidarsyah", 2);
console.log(print);

// Method 3
function repeatNtimess(str, num) {
    return console.log(str.repeat(num));
}
repeatNtimess('khaidarsyah', 2)
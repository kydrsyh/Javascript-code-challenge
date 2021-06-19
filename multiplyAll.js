function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j]            
        } 
    }
    console.log(`The Multiply of array is ${product}`);
    // Only change code above this lin
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);
  //multiplyAll([[1,2],[3,4],[5,6,7]]) should return 5040
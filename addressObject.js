// Create Object using variable
// let address = {
//     street: 'a',
//     city: 'b',
//     zipCode: 'c'
// }
// // Create object using function
// function createAddress(street, city, zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     }
// }

// Instance the object function
// let address = createAddress('a', 'b', 'c')

// Create Object using constructor
function Address(street, city, zipCode){
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

//instance the object constructor
let address = new Address('a', 'b', 'c')


// Function to show address object
function showAddress (address){
    for (let key in address)
    console.log(key, address[key]);
}

showAddress(address)

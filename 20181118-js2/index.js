"use strict"

// var student = {
//     name: 'Pesho',
//     age: 33,
//     address: {
//         town: 'София',
//         street: 'ул. Незабравка'
//     }
// };

// console.log(student);
// console.dir(student);
// console.table(student);

function add(x, y, z = 5) {
    console.log(z);
    
    console.log([...arguments]);
    for (let x of arguments) {
        console.log('for of', x, '(it\'s the value)');
    }
    for (let x in arguments) {
        console.log('for in', x, '(it\'s the key)');
    }
}

var foo = function () {
    x = 5;
    console.log(`I'm foo`);
    
}
var bar = function () {
    console.log(`I'm bar`);
    
}

(
    function () {
        console.log(`I'm anon!`);
        
    }
)

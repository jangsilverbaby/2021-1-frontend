/* eslint-disable no-unused-vars */
let a = []

for (let i = 0; i < 100; ++i) {
    a[i] = Math.floor((Math.random() * 100) + 1);
}



function add (sum, currValue) {
    if (currValue % 2 == 0){
        return sum + currValue;
    } else {
        return sum;
    }
}

let r = a.reduce(add,0)

console.log(r)
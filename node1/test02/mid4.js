/* eslint-disable no-unused-vars */
let a = []

for (let i = 0; i < 100; ++i) {
    a[i] = Math.floor((Math.random() * 100) + 1);
}



function count (sum, currValue) {
    if (currValue % 2 == 0){
        return sum + 1;
    } else {
        return sum;
    }
}

let r = a.reduce(count,0)

console.log(r)
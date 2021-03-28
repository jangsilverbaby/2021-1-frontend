/* eslint-disable no-unused-vars */

let a = [];
let sum = 0;
for (let i = 0; i < 100; ++i) {
    a[i] = Math.floor((Math.random() * 100) + 1);
    sum += a[i];
}
let e = sum / 100;
console.log(e.toFixed(1));
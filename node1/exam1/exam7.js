function clone(a) {
    let b = a.slice(0);
    return b;
}

let a = [1, 2, 3];
let b = clone(a);
a[0] = 11;
console.log(a);
console.log(b);

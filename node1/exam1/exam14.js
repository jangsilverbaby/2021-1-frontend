function createArray() {
    let a = [];
    a[0] = [1, 2, 3];
    a[1] = a[0];
    a[2] = a[0];
    return a;
}

let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);

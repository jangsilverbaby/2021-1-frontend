function createArray() {
    let a = [];
    a[0] = [1, 2, 3];
    a[1] = [1, 2, 3];
    a[2] = [1, 2, 3];
    return a;
}

let a = createArray();
console.log(a);

a[0][0] = 10;
console.log(a);

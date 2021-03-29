function createArray(count) {
    let a = [];
    let i = 1;
    while (a.length != count) {
        a.push(i);
        i += 2;
    }
    return a;
}

console.log(createArray(4));
console.log(createArray(5));
console.log(createArray(6));

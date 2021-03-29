function sum(a) {
    let sum = 0;
    for (let i = 0; i < a.length; ++i) {
        sum += a[i];
    }
    return sum;
}

console.log(sum([1, 2, 3, 4]))
console.log(sum([3, 4, 5]))
console.log(sum([20, 21]))

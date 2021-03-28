function sum(a) {
    let sum = 0;
    for (let i = 0; i < a.length; ++i){
        sum += a[i];
    }
    return sum;
}

function test_sum(f) {
    let a = [];
    for (let i = 0; i < 5; ++i) {
        a[i] = Math.floor((Math.random() * 11));
    }
    console.log(a)
    console.log(f(a))
}

for (let i = 0; i < 5; ++i) {
   test_sum(sum);
}
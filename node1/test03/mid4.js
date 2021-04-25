function sum(a) {
    return a.reduce((a,b) => a + b)
}

function test_sum(f) {
    let a = []
    for(let i = 0; i < 5; i++) {
        a[i] = Math.floor(Math.random() * 11)
    }
    console.log(a)
    console.log(f(a))
}

for(let i = 0; i < 5; i++) {
    test_sum(sum)
}
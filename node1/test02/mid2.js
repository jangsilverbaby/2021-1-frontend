let a = []

for (let i = 0; i < 10; ++i) {
    a[i] = Math.floor((Math.random() * 100) + 1);   
}

a.sort()

console.log(a)
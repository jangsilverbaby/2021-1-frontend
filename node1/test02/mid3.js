let a1 = [];

for (let i = 0; i < 3; ++i) {
    a1[i] = [i*2, i*2+1]
}


let a2 = []

for(let i = 0; i < a1.length; ++i) {
    a2[i] = a1[i]
}

console.log(a1)
console.log(a2)
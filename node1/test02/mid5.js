let a = ["hello.html", "world.js", "readme.txt"]

for (let i = 0; i < a.length; ++i) {
    let n = a[i].indexOf(".")
    console.log(a[i].slice(n))
}
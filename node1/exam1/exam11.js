function remove(a, value) {
    let i = a.indexOf(value);
    a.splice(i, 1);
}

let a = [1, 3, 5, 5, 3, 6];

remove(a, 3);
console.log(a);

remove(a, 5);
console.log(a);

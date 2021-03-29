function contains(a, value) {
    if (a.indexOf(value) < 0) {
        return false;
    } else {
        return true;
    }
}

let a = [1, 3, 5, 6];
console.log(contains(a, 3));
console.log(contains(a, 4));
console.log(contains(a, "3"));

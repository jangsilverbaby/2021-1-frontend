let person1 = {name: "홍길동", age: 16}
let person2 = {name: "홍길동", age: 16}

function euqals(p1, p2) {
    return p1.name == p2.name &&
           p1.age == p2.age
}

console.log(euqals(person1, person2))
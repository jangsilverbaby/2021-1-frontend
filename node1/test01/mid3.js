let person1 = [];
let age = 16;
for (let i = 0; i < 3; ++i) {
    let person = new Object();
    person.name = "홍길동";
    person.age = age + i;
    person1[i] = person;
}

let person2 = person1;
person1[0].age = 20;
console.log(person1)
console.log(person2)

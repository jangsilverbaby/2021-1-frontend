let i = 3, j =4;
let a = [5, 6, 7];

let a1 = [i, j, a];
console.log(a1);

let a2 = [i, j, ...a]; //...연산자의 이름은 spreading operator, 뜻은 '분해 연산자'
console.log(a2);


let s = "abcdefgh";
console.log(s.slice(2, 4));
console.log(s.slice(2));
console.log(s.slice(-3));
console.log(s.slice(-5, -3));
console.log(s.slice(0)); //문자열은 mutable해서 복제가 아무 의미 없다.

let a = [1, 2, 3];
let b = a.slice(0); //배열은 immutable해서 복제가 의미가 있다.
let c  = a
a[0] = 11;
console.log(a);
console.log(b);
console.log(c);

let sa = "123";
let sb = sa.slice(0); //배열은 immutable해서 복제가 의미가 있다.
let sc  = sa
a[0] = 11;
console.log(sa);
console.log(sb);
console.log(sc);
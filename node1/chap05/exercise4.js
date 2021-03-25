/*let a = ["c:/temp/guide.hwp",
         "c:/pj/frontend/chap05/substring1.js",
         "homework.docx"]*/
//a 배열의 경로명들 각각에 대해서,
//아래 부분들을 추출해서 출력하는 코드를 구현하시오.

/*
파일 확장자 출력하기
.hwp
.js
.docx

파일명 출력하기
guide.hwp
substring1.js
homework.docx

파일 이름부분만 출력하기
guide
substring1
homework
*/

let a = ["c:/temp/guide.hwp",
         "c:/pj/frontend/chap05/substring1.js",
         "homework.docx"];

console.log("파일 확장자 출력하기")
for (let i = 0; i < a.length; ++i) {
    let s = a[i].match(/(\.[a-z]+)/);
    console.log(s[1]);
}
console.log("\n")
console.log("파일명 출력하기")
for (let i = 0; i < a.length; ++i) {
    let s = a[i].match(/([a-zA-Z0-9]+\.[a-z]+)/)
    console.log(s[1]);
}
console.log("\n")
console.log("파일 이름부분만 출력하기")
for (let i = 0; i < a.length; ++i) {
    let s = a[i].match(/([a-zA-Z0-9]+)\.[a-z]+/)
    console.log(s[1]);
}
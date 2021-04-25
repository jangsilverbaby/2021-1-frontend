let persons = [
    { name: "장은애", age: 24 },
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 19 }
  ];

  let max = persons.reduce((a, b) => a.age > b.age ? a : b)
  console.log(max)
let count = 1;

let id = setInterval(() => {
    if(count == 10) clearInterval(id)
    console.log(count + "번", new Date())
    count++;
}, 1000);

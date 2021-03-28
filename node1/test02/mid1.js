let a = []
let remove = []
for (let i = 0; i < 10; ++i) {
    a[i] = Math.floor((Math.random() * 100) + 1);
    let last = (a[i].toString())[a[i].toString().length - 1]
    switch (last) {
        case '5':
            remove.push(i);
            break;
        case '6':
            remove.push(i);
            break;
        case '7':
            remove.push(i);
            break;
        case '8':
            remove.push(i);
            break;
        case '9':
            remove.push(i);
            break;  
        default:
            break;
    }
}


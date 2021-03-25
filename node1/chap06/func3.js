function outterFunc() {
    print("hello");

    function print(msg) {
        console.log(msg)
    }
}

outterFunc()
//print("world") 여기서 호출될 수 없다.
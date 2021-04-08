let rectangle = {
    width: 5,
    height: 7,
    area : function() {return this.width * this.height} //this 생략 불가능
}

console.log(rectangle.area())
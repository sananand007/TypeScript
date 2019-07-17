class Test {
    constructor() {
        this.x = 1;
        this.y = 2;
    }
    method() {
        return this.x + this.y;
    }
}


var test = new Test();

console.log(test.method());
function test() {
    this.x = 'foo';

    return {
        // method: function () {
        //     return this.x;
        // }
        method: () => {
            return this.x;
        }
    };
}

var test = new test();

console.log(test.method())
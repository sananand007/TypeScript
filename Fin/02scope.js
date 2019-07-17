function test(y) {
    return x + y;
}
var x = 'global';
console.log(test('function'))

console.log(x);
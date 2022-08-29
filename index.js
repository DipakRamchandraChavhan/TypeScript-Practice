function test() {
    for (var i = 0; i < 5; i++)
        console.log(i);
}
test();
var a = [33, 465, 346, 3, 2, 887, 34, 70];
a.sort(function (a, b) { return a - b; });
console.log(a);

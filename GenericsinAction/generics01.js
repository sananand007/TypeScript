var Generics;
(function (Generics) {
    function first(arr, predicate) {
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (predicate(item) == true) {
                return item;
            }
        }
        return null;
    }
    var arr = [4, 6, 8, 9];
    var item = first(arr, function (x) { return !!(x % 2); });
    console.log(item);
})(Generics || (Generics = {}));

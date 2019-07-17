var Iterators;
(function (Iterators) {
    function first(arr, predicate) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            if (predicate(item) == true) {
                return item;
            }
        }
        return null;
    }
    var arr = [4, 16, 7, 21];
    var item = first(arr, function (x) { return !!(x % 2); });
    console.log("First odd number: " + item);
})(Iterators || (Iterators = {}));

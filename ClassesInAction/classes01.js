var Classes;
(function (Classes) {
    var EasingFunctions = /** @class */ (function () {
        function EasingFunctions() {
        }
        EasingFunctions.Linear = function (currentTime, startValue, endValue, duration) {
            endValue = (endValue - startValue);
            return endValue * currentTime / duration + startValue;
        };
        return EasingFunctions;
    }());
    var x1 = 0;
    var x2 = 10;
    console.log(EasingFunctions.Linear(0, x1, x2, 1000));
    console.log(EasingFunctions.Linear(1000, x1, x2, 1000));
})(Classes || (Classes = {}));

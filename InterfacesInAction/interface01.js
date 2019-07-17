var Interfaces;
(function (Interfaces) {
    var EasingFunctions = /** @class */ (function () {
        function EasingFunctions() {
        }
        // Linear Function represent an EasingFunction Interface, we can do this as Interfaces are types in TS
        EasingFunctions.Linear = function (currentTime, startValue, endValue, duration) {
            endValue = (endValue - startValue);
            return endValue * currentTime / duration + startValue;
        };
        EasingFunctions.EaseInCubic = function (currentTime, startValue, endValue, duration) {
            endValue = (endValue - startValue);
            currentTime /= duration;
            return endValue * currentTime * currentTime * currentTime + startValue;
        };
        return EasingFunctions;
    }());
    var x1 = 0;
    var x2 = 10;
    console.log(EasingFunctions.Linear(0, x1, x2, 1000));
    console.log(EasingFunctions.Linear(1000, x1, x2, 1000));
    console.log(EasingFunctions.EaseInCubic(0, x1, x2, 1000));
    console.log(EasingFunctions.EaseInCubic(1000, x1, x2, 1000));
})(Interfaces || (Interfaces = {}));

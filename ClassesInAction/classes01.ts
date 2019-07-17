namespace Classes {

    class EasingFunctions {
        static Linear(currentTime :number, startValue :number, endValue :number, duration :number) :number {
            endValue = (endValue - startValue);
            return endValue * currentTime / duration + startValue;
        }
    }

    var x1 = 0;
    var x2 = 10;

    console.log(EasingFunctions.Linear(0, x1, x2, 1000))
    console.log(EasingFunctions.Linear(1000, x1, x2, 1000))
}
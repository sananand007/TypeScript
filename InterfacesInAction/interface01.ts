namespace Interfaces {
    
    interface EasingFunction {
        (currentTime :number, startValue: number, endValue :number, duration :number) :number;
    }

    class EasingFunctions {

        // Linear Function represent an EasingFunction Interface, we can do this as Interfaces are types in TS
        public static Linear: EasingFunction = (currentTime: number, startValue: number, endValue: number, duration: number) => {
            endValue = (endValue - startValue);
            return endValue * currentTime / duration + startValue;
        }

        public static EaseInCubic : EasingFunction = (currentTime: number, startValue: number, endValue: number, duration: number) => {
            endValue = (endValue - startValue);
            currentTime /= duration;
            return endValue * currentTime * currentTime * currentTime + startValue;
        }
    }

    var x1 = 0;
    var x2 = 10;

    console.log(EasingFunctions.Linear(0, x1, x2, 1000));
    console.log(EasingFunctions.Linear(1000, x1, x2, 1000));

    console.log(EasingFunctions.EaseInCubic(0, x1, x2, 1000));
    console.log(EasingFunctions.EaseInCubic(1000, x1, x2, 1000));
}
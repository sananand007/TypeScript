function compare(x, y) {
    if (typeof x == "number") {
        return x == y ? 0 : x > y ? 1 : -1; // ternary operation
    } else if (typeof x == "string") {
        return x.localeCompare(y);
    }
    throw "Unknown types";
}

console.log(compare('x','y'))
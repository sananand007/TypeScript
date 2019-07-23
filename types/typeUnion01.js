function compare(x, y) {
    if (typeof x == "number") {
        return x == y ? 0 : x > y ? 1 : -1;
    }
    else if (typeof x == "string" && typeof y == "string") {
        return x.localeCompare(y);
    }
    throw "unknown types";
}
console.log(compare("hover", "marvin"));

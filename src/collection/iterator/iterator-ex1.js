var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var NumberIterator = /** @class */ (function () {
    function NumberIterator(start, end) {
        this.start = start;
        this.end = end;
        this.current = start;
    }
    NumberIterator.prototype.next = function () {
        if (this.current <= this.end) {
            var value = this.current;
            this.current++;
            return { value: value, done: false };
        }
        else {
            return { value: undefined, done: true };
        }
    };
    NumberIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    return NumberIterator;
}());
var iterator = new NumberIterator(1, 3);
try {
    for (var iterator_1 = __values(iterator), iterator_1_1 = iterator_1.next(); !iterator_1_1.done; iterator_1_1 = iterator_1.next()) {
        var num = iterator_1_1.value;
        console.log(num);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (iterator_1_1 && !iterator_1_1.done && (_a = iterator_1.return)) _a.call(iterator_1);
    }
    finally { if (e_1) throw e_1.error; }
}

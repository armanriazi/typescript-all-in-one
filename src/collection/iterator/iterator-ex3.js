///
/// ```bash
/// pnpm tsc ./src/collection/iterator/iterator-ex3.ts
/// ```
///
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
var Component = /** @class */ (function () {
    function Component(name) {
        this.name = name;
    }
    return Component;
}());
var Frame = /** @class */ (function () {
    function Frame(name, components) {
        this.name = name;
        this.components = components;
    }
    Frame.prototype[Symbol.iterator] = function () {
        var pointer = 0;
        var components = this.components;
        return {
            next: function () {
                if (pointer < components.length) {
                    return {
                        done: false,
                        value: components[pointer++]
                    };
                }
                else {
                    return {
                        done: true,
                        value: null
                    };
                }
            }
        };
    };
    return Frame;
}());
var frame = new Frame("Door", [new Component("top"), new Component("bottom"), new Component("left"), new Component("right")]);
try {
    for (var frame_1 = __values(frame), frame_1_1 = frame_1.next(); !frame_1_1.done; frame_1_1 = frame_1.next()) {
        var cmp = frame_1_1.value;
        console.log(cmp);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (frame_1_1 && !frame_1_1.done && (_a = frame_1.return)) _a.call(frame_1);
    }
    finally { if (e_1) throw e_1.error; }
}

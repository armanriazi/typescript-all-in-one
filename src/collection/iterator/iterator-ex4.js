///
/// ```bash
/// pnpm tsc ./src/collection/iterator/iterator-ex4.ts
/// ```
///
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
        this.pointer = 0;
    }
    Frame.prototype.next = function () {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    };
    Frame.prototype[Symbol.iterator] = function () {
        return this;
    };
    return Frame;
}());
var frame = new Frame("Door", [new Component("top"), new Component("bottom"), new Component("left"), new Component("right")]);
for (var _i = 0, frame_1 = frame; _i < frame_1.length; _i++) {
    var cmp = frame_1[_i];
    console.log(cmp);
}

///
/// ```bash
/// pnpm tsc ./src/types/compound/enum/enum-ex5.ts
/// ```
///
var AnimalFlags;
(function (AnimalFlags) {
    AnimalFlags[AnimalFlags["None"] = 0] = "None";
    AnimalFlags[AnimalFlags["HasClaws"] = 1] = "HasClaws";
    AnimalFlags[AnimalFlags["CanFly"] = 2] = "CanFly";
    AnimalFlags[AnimalFlags["EatsFish"] = 4] = "EatsFish";
    AnimalFlags[AnimalFlags["Endangered"] = 8] = "Endangered";
})(AnimalFlags || (AnimalFlags = {}));

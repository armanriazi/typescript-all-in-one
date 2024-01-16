///
/// ```bash
/// pnpm tsc ./src/types/compound/enum/enum-ex11.ts
/// ```
///
var Evidence;
(function (Evidence) {
    Evidence["UNKNOWN"] = "";
    Evidence["PASSPORT_VISA"] = "passport_visa";
    Evidence["PASSPORT"] = "passport";
})(Evidence || (Evidence = {}));
(function (Evidence) {
    function isThereEvidence(status) {
        switch (status) {
            case Evidence.PASSPORT:
                console.log(status);
                return true;
            case Evidence.PASSPORT_VISA:
                return true;
                break;
            default:
                return false;
        }
    }
    Evidence.isThereEvidence = isThereEvidence;
})(Evidence || (Evidence = {}));
var passport = Evidence.PASSPORT;
console.log(Evidence.isThereEvidence(passport));

///NonNullable to extract the types from a given type union that are not null or undefined. Removing null and undefined from the given type union, which was number | undefined | null, only leaves type number.
/// `>tags:` [[Important]] [[Lib]] #NonNullable
type NotNullOrUndef = NonNullable<number | undefined | null>;
let numValue: NotNullOrUndef = 1;
// let unValue: NotNullOrUndef = undefined; //Invalid
// let nullValue: NotNullOrUndef = null; //Invalid


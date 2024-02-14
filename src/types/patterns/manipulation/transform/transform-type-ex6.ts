/// `>tags:` [[Important]] [[Lib]] #keyof #wrapper #Required #Mapped_type
type RecordedCd = Record<"c" | "d", number>;

// Declare a variable of type RecordedCd and assign it an object with properties "c" and "d"
let recordedCdVar: RecordedCd = {
  c: 1,
  d: 1,
};
/* Error
let recordedCdVar2: RecordedCd = {
    c: 1,    
};
*/
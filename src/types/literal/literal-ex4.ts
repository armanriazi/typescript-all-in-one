let x = [1, 'x', 1, null]; // The type inferred is: (string | number | null)[]

let y= [new RegExp('x'), new Date()]; // Type inferred is: (RegExp | Date)[]

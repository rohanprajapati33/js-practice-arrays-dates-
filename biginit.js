 let x = 123456789n;
 let u = 123456789n;
 let z = x*u
console.log(z)

let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
console.log( hex + "<br>" + oct + "<br>" + bin)

console.log(Number.isInteger(10))
console.log(Number.isSafeInteger(12345678901234567890))
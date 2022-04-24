/// <reference path="utility-functions.ts" />
// for ts compiler to compile the code with all dependencies

const result = Utility.maxBooksAllowed(37);
console.log(result);
import util = Utility.Fees;
const fee = util.calculateLateFee(3);
console.log(fee);

/// <reference path="utility-functions.ts" />
// for ts compiler to compile the code with all dependencies
var result = Utility.maxBooksAllowed(37);
console.log(result);
var util = Utility.Fees;
var fee = util.calculateLateFee(3);
console.log(fee);

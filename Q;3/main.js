"use strict";
let personName = "Rizwan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, (beauty) => beauty.toUpperCase()));
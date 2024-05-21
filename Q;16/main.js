"use strict";
let guests = ["Ali", "Bilal", "Saif"];
console.log("Great news ! i found a bigger dinner table");
//Adding more guests
guests.unshift("Rizwan");
guests.splice(guests.length / 2, 0, "Usman");
guests.push("Roman");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

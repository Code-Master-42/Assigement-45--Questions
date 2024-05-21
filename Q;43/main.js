"use strict";
let magicians = ["fayaz", "Ramzan", "Sohail"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician},the Great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicians.slice());
console.log("orignal magicians");
show_magicians("magicians");
console.log("great magicians");
show_magicians("great magicians");

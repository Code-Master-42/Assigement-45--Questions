let magician:string[]=["fayaz","Ramzan","Sohail"];
function make_great(magicians:string[]):string[]{
    let greatMagicians=[];
    magicians.forEach(magician => {
greatMagicians.push(`${magician} the Great`);});
     return greatMagicians 
    }
    let greatMagicians= make_great(magicians.slice());
    console.log("orignal magicians");
    show_magicians(magicians);
    console.log("greatMagicians");
    show_magicians(greatMagicians)

var Magicians = ["Ali", "talha", "rizwan"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the Great";
        console.log(Magicians);
    }
}
make_great(Magicians);

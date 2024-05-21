let magician:string[]=["Ali","talha","rizwan","rizwan"];
function make_greats(magicianArry:string[]){
    for(let i=0;i < magicianArry.length;i++){
        magician[i] =`the Great` + magicianArry[i] 
    
    }
}
function show_magicians(magician:string[]){
    magician.forEach(Element=>{
        console.log(Element);});}
make_greats(magician);
show_magician(magician);
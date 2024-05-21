function make_car(manufacturer:string,model:string,...options:[string,any][]):object{
    let car = {manufacturer,model};
    options.forEach(([keys,value])=>
        car[keys]=value);
        return car;
}
console.log(make_car("toyota","corolla",["color","red"],["year","2020"]));
console.log(make_car("ford","fiesta",["color","blue"],["sunroof","true"]));
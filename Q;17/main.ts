let guest:string[]=["Ali","talha","bilal"];
console.log("unfortunately, i can only invite two people for dinner.");
while (guests.length >2 ){
 let removedGuest = guests.pop();
 console.log(`sorry,${removedGuest},I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest},you'r still invited to dinner.`);
});
guests.splice(0,guests.length);
console.log(guests);
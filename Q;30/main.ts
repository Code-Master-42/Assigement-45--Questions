let username:string[]=["admin","user1","user2","user3","user4"];
username.forEach(username =>{
    if(username==="admin"){
        console.log("Hello admin would you like to see a status report?");
    }else{
        console.log(`Hello ${username},thanks you for logging again`)
    }
})
"use strict";
let current_users = ["user1", "admin", "user3", "user4", "user5"];
let new_users = ["user1", "user6", "user7", "admin", "user9"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} we need to enter a new username;`);
    }
    else {
        console.log(`${newUser}is aviable`);
    }
});

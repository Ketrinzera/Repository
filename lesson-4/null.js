function getUserName(user) {
    return user ? user.name : null;
}

let user1 = { name: "Kate" };
let user2 = null;

console.log(getUserName(user1)); 
console.log(getUserName(user2));
let user1 = {
    firstName: "muhammad ",
    lastName: "umair",
    fullName: "user1",
    age: "20",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
}
let user2 = {
    firstName: "muhammad ",
    lastName: "umair",
    fullName: "user2",
    age: "20",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
}
let user3 = {
    firstName: "muhammad ",
    lastName: "umair",
    fullName: "user3",
    age: "20",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
}
let user4 = {
    firstName: "muhammad ",
    lastName: "umair",
    fullName: "user4",
    age: "20",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
}
let user5 = {
    firstName: "muhammad ",
    lastName: "umair",
    fullName: "user5",
    age: "20",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
}

let user7 = {
    firstName: "muhammad ",
    lastName: "umair",
    fullName: "user7",
    age: "20",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png"
};


let users = [user1, user2, user3, user4, user5, user7];

var flag=false;
let input = prompt("please search in user1, user2, user3 format");


for (var i = 0; i < users.length; i++) {
    if (users[i].fullName === input) {
        document.write(users[i].fullName, " is found")
           flag=true;
           break;
    }
};
if (!flag) {
    document.write("user is not find")

};
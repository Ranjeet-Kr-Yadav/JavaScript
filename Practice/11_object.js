//singleton = constructor is singleton/ litral is not single ton

//object litrals
const mysym =Symbol[123] //symbol
const user = {
    name:"Ranjeet",
    mysym : "hii",
    age: 21,
    location: "noida",
    email: "123@gmail.com"
}

user.email ="12345@gmail.com"; //overwrite the value

// console.log(user.email)
// console.log(user["email"])
// console.log(user[mysym])

// Object.freeze(user) //freeze the data
// console.log(user)


const regularUser = {
    emai:"123@gmail.com",
    fullname:{
        userfullname:{
            name:"Ranjeet",
            lastname:"yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.name)

const course ={
    coursename : "JS",
    price:"999",
    instructor:"Ranjeet"
}

//cource.instructor
const {instructor} = course;
console.log(instructor)

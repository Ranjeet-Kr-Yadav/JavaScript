const user = {
    username : "Ranjeet",
    price : 999,
    welcomeMsg: function(){
        console.log(`${this.username}`)
    }
}
// user.welcomeMsg()
// user.username ="Ram";
// user.welcomeMsg()



// console.log(this)


function thisCheck(){
    // console.log(this)
}

// thisCheck()
const arrow =function(){
    let username = "Ranjeet"
    console.log(this.username)
}
arrow()


// Arrow function
const arrowFun = () => {
    let username = "Ranjeet"
    console.log(this.username)

}
// arrowFun()


const add = (num1,num2) =>{
    return num1+num2
}

console.log(add(5,6))

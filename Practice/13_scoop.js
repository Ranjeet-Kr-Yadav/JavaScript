
let a = 40; //global variable
if(true){      // declare under paranthesis is scope / block scopw
    let a= 10;
    const b = 20;
    var c = 30;

}

// console.log(a)
// console.log(b)
// console.log(c)



function one(){
    const user = "Ranjeet"
    function two(){
        const lstname = "yadav"
        console.log(user)
    }
    two()
}
one()
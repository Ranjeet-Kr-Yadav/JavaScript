// global variable se pollution hoti hai so global variable ke pollution se bachne ke liye aisa karte hai 

// immediately invoked function express (IIFE)

(function one (){ //named iffe
    console.log(`name iife`)
})();

( (name)=>{  //simple iife
    console.log(`DB Connected ${name}`)
})("Ranjeet"); //parameter

(function one (){
    console.log(`DB not Connected`)
})();

(function add (num1,num2){
    console.log(num1+num2)
})(4,5);


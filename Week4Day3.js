////////////////////////////////
// Easy Going
////////////////////////////////
for (i=1; i<=20; i++){
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (i=0; i<=200; i+=2){
       console.log(i);
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (i=1; i<=100; i++){
    if (i%3==0 && i%5==0){
        console.log(i+" fizzbuzz")
    }else if(i%3==0){
        console.log(i+" fizz")
    }else if (i%5==0){
        console.log(i+" buzz")
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//1.
//increment age by 1
plantee[2]++;
console.log(plantee[2]);

//2.
wolfy[3] = "Gotham City";
console.log(wolfy[3]);

//3.
dart.push("Dawkins");
console.log(dart);

//4.
wolfy[0] = "Gameboy";



////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

//1.
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
//2.
for (let turtle of ninjaTurtles) {
    upperCaseTurtle = turtle.toUpperCase(); 
    console.log(upperCaseTurtle);
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////



////////////////////////////////
//  Find the Median
////////////////////////////////

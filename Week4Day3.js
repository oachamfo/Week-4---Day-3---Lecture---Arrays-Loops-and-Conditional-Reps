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
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//Console log: the index of Titanic
console.log("index of Titanic: " + favMovies.indexOf('Titanic'));

//1. the sort() method permanently altered the array
favMovies.sort();
console.log("sorted favMovies: " + favMovies);

//2. 
favMovies.pop();

//3.
favMovies.push("Guardians of the Galaxy");

//4.
console.log(); //blank line
console.log("favMovies before reverse(): " + favMovies);
console.log(); //blank line
favMovies.reverse();
console.log("reverse() favMovies: " + favMovies);

//5. shift() removes the first element of an array and returns the element
favMovies.shift();

//6. unshift() adds elements to the beginning of array and returns new length.

//7. splice favMovies array at "Django Unchained" and add "Avatar"
//splice(start, deleteCount, item0, item1, /* … ,*/ itemN)
console.log(); //blank line

spliceRightHalfOfArray = favMovies.splice(favMovies.indexOf("Django Unchained"), Infinity, 'Avatar');

// this adds Avatar to the last half after splice() since directions did not specify which array to add
//Avatar to:
spliceRightHalfOfArray.push('Avatar');

console.log(); //blank line
console.log("left half of favMovies array after splice(): " + favMovies);
console.log("right half of favMovies array using splice(): " + spliceRightHalfOfArray);
console.log(); //blank line

//8. slicethe last half of the array (slice the last half from step 7)
//slice(start index, end index); slice() is zero-based index
//end index exclusive
//using slice() instead of splice() to get the right half of the spliced array
middleOfSplicedArrayLength = Math.floor(spliceRightHalfOfArray.length/2);
middleOfSplicedArrayIndex = middleOfSplicedArrayLength-1;
sliceRightHalfArrayStartIndex = middleOfSplicedArrayIndex;
sliceRightHalfArrayEndIndex = spliceRightHalfOfArray.length; //length - 1 = last index that will be included


//9.
sliceRightHalfOfArray = spliceRightHalfOfArray.slice(sliceRightHalfArrayStartIndex, sliceRightHalfArrayEndIndex);
console.log(); //blank line
console.log("right Half of spliced array using slice(): " + sliceRightHalfOfArray);

//10.
console.log(); //blank line
console.log("favMovies length: " + favMovies.length);
console.log("splice favMovies array: " + spliceRightHalfOfArray);
console.log("slice splcied array: " + sliceRightHalfOfArray);


//11.
//find indexOf('Fast and Furious') on right half of array: will return -1 if not found
console.log(sliceRightHalfOfArray.indexOf('Fast and Furious'));
console.log(spliceRightHalfOfArray.indexOf('Fast and Furious'));



////////////////////////////////
// Where is Waldo
////////////////////////////////


const whereIsWaldo = 
[["Timmy", "Frank"], "Eggbert",
["Lucinda", "Jacc", "Neff", "Snoop"],
["Petunia", ["Baked Goods", "Waldo"]]];

//remove Eggbert
whereIsWaldo.splice(whereIsWaldo.indexOf('Eggbert'), 1);
console.log(whereIsWaldo);

//change Neff to No One
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);
//access and console.log Waldo
console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//  Excited Kitten
////////////////////////////////
//1.
for(i=1; i<=20; i++){
    console.log(i + " "+ "Love me, pet me! HSSSSSS!");
}
console.log(); //blank line
//2.
//let meow;
kittyTalk = [
    '...human...why you taking pictures of me?...',
    '...the catnip made me do it...',
    '...why does the red dot always get away...'
]
for(i=1; i<=20; i++){
    if(i%2==0){
        //a random number that is greater than or equal to 0, but less than or equal to 1
        //that number is multiplied by 2, so two is the maximum the random number can be
        meow = Math.floor(Math.random() * 2)
        console.log(i + " "+ "Love me, pet me! HSSSSSS! " + kittyTalk[meow]);
    }else{
    console.log(i + " "+ "Love me, pet me! HSSSSSS!");    
    }
}






////////////////////////////////
//  Find the Median
////////////////////////////////

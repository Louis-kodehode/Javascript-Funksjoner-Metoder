/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Show some examples in your code that tests
your functions and methods. Use a variation of arrow functions and 
function keyword functions.

Add comments to your code that briefly describe what your code does.

1.

Make the following function:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

******************************************************************************/
let number = 10;

function tall(number) {
  if (number % 2 === 1) {
    return "Odd";
  } else {
    return "Even";
  }
}

console.log(tall(3));
console.log(tall(6));

// Når jeg console logger så sjekker if statementen om tallet det får inn går opp i 2, og siden jeg har 3 som den første så går 2 ikke opp i 3 og blir dermed Odd. og på tallet 6 så blir det returna som Even siden 2 går opp i 6

//
/******************************************************************************
2.

Make the following function:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/

function myString(string) {
  return string.toUpperCase() + "!";
  // return `${string.toUpperCase()}!`;
}

console.log(myString("This is cool"));

// Her console.logge eg myString til "This is cool", så når funksjonen "return" går gjennom string.toUpperCase() + "!"; så blir !This is cool! til all store bokstaver pga toUpperCase også plusses det me uttropstegn.

/******************************************************************************
3.

Make the following function:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23

If no hour is received, your function should return an error message.

******************************************************************************/

function greetingOfDay(name, hour) {
  if (hour < 0 || hour > 23) {
    return "Invalid time";
  } else if (hour <= 5) {
    return `Good night ${name}`;
  } else if (hour <= 11) {
    return `Good morning ${name}`;
  } else if (hour <= 17) {
    return `Good day ${name}`;
  } else {
    return `Good evening ${name}`;
  }
}

console.log(greetingOfDay("Petter", 18));

// Her jobbet jeg meg nedover fra toppen og begynte me if (hour < 0) og returnet "Invalid time" og sørget for det var riktig, så gikk jeg til else if (hour <= 5). Jeg begynte orginalt med ">= 0" og tenkte vis jeg
// tok neste linje med "hour >=6" så ville den gå videre ned i listen vis jeg console.logget noe høyere tall, men den stoppet med første tall som var 0 i dette tilefelle, derfor tok jeg "<= 5" siden då når
// den kjekker for tallet er lavere en 5 og tallet er høyere så går den videre.
/******************************************************************************
4.

Make the following function:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/
const frukt = [
  "Apple",
  "Banana",
  "Melon",
  "Mango",
  "Pear",
  "Pineapple",
  "Cherry",
];

function arrayRemover(frukt) {
  frukt.shift();
  frukt.pop();
  return frukt;
}
console.log(arrayRemover(frukt));

// Her søkte jeg opp ws3 array methods, fant de riktige metoder som passet og returnet arraye på slutten

/******************************************************************************
5.

Make the following function:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/

function spaceRemove(text) {
  return text.trim().replace("hard", "fun");
}
console.log(spaceRemove("  Javascript is hard   "));

// Her søkte jeg opp moteder igjen og brukte de inn i koden, trim fjerner alt av empty spaces, og replace sjekker om teksten har "hard" og vis den har det, så skifter den til fun

/******************************************************************************
6.

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

******************************************************************************/

const heroes = [
  "Spider-Man",
  "Thor",
  "Hulk",
  "Doctor Strange",
  "Iron Man",
  "Black Widow",
];

function array(heroes) {
  heroes.shift();
}
array(heroes);
let joinedString = heroes.join("💪");

let removedHeroes = heroes.splice(0, 2, "Skrull");

console.log(heroes);
console.log(joinedString);

// Det jeg slet me mest her var splice, men etter jeg fant ut av det første tallet var hvor den starter å slette, og andre taller var hvor mye den sletter så forsto jeg

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/

/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Make the following function:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/

const name = "Tarun"
const repoCount = 25
// console.log(name + repoCount + Value");
console.log(`hello my names is tarun ${name} and my repo count is ${repoCount}`); // we call it string interpolation

// another way to declare string

const gameNmae = new String('foot-ball');

console.log(gameNmae.__proto__);

console.log(gameNmae.length);
console.log(gameNmae.toUpperCase());
console.log(gameNmae.indexOf('b'));
console.log(gameNmae.charAt(4));

const newString = gameNmae.substring(0, 4);
console.log(newString);

const anotherString = gameNmae.slice(-8, 5);
console.log(anotherString);

const newString1 = "    tarun    "
console.log(newString1);
console.log(newString1.trim());
// trim start & end

const url = "https://www.codewith%20harry.com"

console.log( url.replace('%20', '-'));

console.log(url.includes('tarun'));

console.log(gameNmae.split('-'));





'use strict';


// Note: We can only use The spread operator (...) when bulding an array, or when we pass values into a function

// Note: Multiple values separated by commas are usually only expected when we pass arguments into functions are when we build a new array

// Note: Since 6S 2018 the spread operator (...) can also work on object, even though objects are not iterable

// Note: The spread operator (...) can do shallow copies of arrays. It can also be used to make shallow copies objects instead of using the 'object.assign'

// Note: The Rest Pattern (...) has the same syntax as the spread operator (...), but does the oposite.


// Note: We use the spread operator to expand an arrray into individual elements. The Rest Patter uses the same syntax, however its use to collect multiple elements and condense them into an array. (spread operator (...) is to unpact an array, while the rest pattern is to pack elements into an arry).

// spread operator (...) syntax is used on the right hand side of the assignment operator (The equal sign). However, it can also be used on the left hand side together with desructoring (REST Pattern).

// Note: The rest pattern (...) is used on the left hand side of the assignment operator (The equal sign).

// Note: It is called REST (Rest pattern) because it takes the rest/remaining elements of an array, and put them in a new array.

// Note: The Rest pattern basically collects the elements that are un-used in the desructoring assignment.

// Note: The rest pattern (...) syntax collects all the array elements after the last variable, it doesn't include any skipped elements. So it's really just the rest of the elements, and for that reason the rest pattern (...) should be the last in the desructuring assignment. Therefore, there can only be one rest pattern in a desructuring assignment.

// Note: The rest pattern (...) can also be used with objects, the difference is that the remaining elements would be collected in a new object, and not in a new array.

// Note: Rest parameters are used to create functions that accept any number of arguments


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


  // Object literal third enhancement
  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


  // Object literal first (and third) enhancement
  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object litterals
  openingHours,

  // Proverty name : Variable name || before ES6
  // openingHours: openingHours,

  // Object literal second enhancement || removed ': function'
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },


  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }

};


// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days`;

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

for (const day of properties) {
  openStr += ` ${day},`;
}

console.log(openStr);


// Property VALUES
const values = Object.values(openingHours);
console.log(values);


// Entire object || Transform object into an array
const entries = Object.entries(openingHours);
// console.log(entries);


// for (const [key, {open, close}] of entries) {
//   // console.log(entries);
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// [key, value]
for (const [day, {open, close}] of entries) {
  // console.log(entries);
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}





// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// // With optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example of optional chaining
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }


// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// // const users = []

// console.log(users[0]?.name ?? 'User array empty');

// // Without Optional chaining we would have to do something like this:
// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');







// // FOR OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // FOR IN LOOP DESTRUCTURING
// for (const [i, el] of menu.entries()){
//   // console.log(`${item[0]+1}: ${item[1]}`);
//   console.log(`${i}: ${el}`);
// } 

// // console.log([...menu.entries()]);




// ///////////////////////////////////
// Coding Challenge #1 Data

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// // const players1 = game.players[0];
// // const players2 = game.players[1];

// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayes] = players1;
// console.log(gk, fieldPlayes);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5.
// // const { team1, x: draw, team2 } = game.odds;
// const { odds: {team1, x: draw, team2} } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);


// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');




// ////////////////////////////////////
// // Logical operators
// const rest1 = { 
//   name: 'Capri', 
//   // numGuests: 20, 
//   numGuests: 0 
// };

// const rest2 = { 
//   name: 'La Piazza', owner: 
//   'Giovanni Rossi' 
// };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// Same as above
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// The logical nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'
// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1);
// console.log(rest2);





// // Nullish Coalescing operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10; 
// console.log(guestsCorrect);


// console.log('----OR----');
// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('----AND----');
// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// console.log('Hello' && 23 && null && 'jonas');

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // Same as above

// ////////////////////////////////////




// // 1) Destructuring
// //----------//
// // SPEAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];


// // REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);


// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);


// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// //----------//

// // 2) Functions
// //----------//
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// }

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');
// //----------//



///////////////////////////////////
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);


// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// // Real world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt("Ingredient 2?"), 
//   // prompt("Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = {foundedIn: 1998,...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);




/////////////////////////////
// Destructuring Objects
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1
// });



// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName, 
//   openingHours: hours, 
//   categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
// ({a, b} = obj);
// console.log(a, b);

// // Nested objects
// const {fri: {open : o, close : c}} = openingHours;
// console.log(o, c);



///////////////////////////////////////////////////
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z)
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switching bariables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j);
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);






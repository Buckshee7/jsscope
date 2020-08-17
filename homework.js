// Episode 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);
// // ********* "The murderer is Miss Scarlett"


// // Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// // ********* "The murderer is Professor Plum", as murderer cannot be reassigned due to const keyword


// // Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// // ********* "First Verdict: The murderer is Mrs. Peacock", as murderer is defined using let keyword and function returns the value
// // ********* "Second Verdict: The murderer is Professor Plum", as let keyword has block scope only so change within function disregarded


// // Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
// // ********* "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard", as let allows the value to be changed within the function and the string is returned
// // ********* "Suspect three is Mrs. Peacock", as the change was scoped to the function only due to the let keyword


// // Episode 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);
// // ********* "The weapon is the revolver", as the content of collections can be changed even when decalred with const keyword


// // Episode 6

//   let murderer = 'Colonel Mustard';

//   const changeMurderer = function() {
//     murderer = 'Mr. Green';
  
//     const plotTwist = function() {
//       murderer = 'Mrs. White';
//     }
  
//     plotTwist();
//   }
  
//   const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);
// // ********* "The murderer is Mrs. White", as changemurderer() changes the value to Mrs White on calling plotTwist()



// // Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// // ********* "The murderer is Mr Green", as within plotTwist() murderer variable is redeclared with let and so has block scope that applies to plotTwist only


// // Episode 8

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);
// // ********* "The weapon is Candle Stick", as object's contents are mutable even when declared with const.


// // Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// // ********* "The murderer is Professor Plum", as murderer is redecalered using let within if statement meaning is is scoped the the if block only
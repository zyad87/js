//----------------- questionuestion1 -----------------

let tringleLength = 2;
let tringleWidth = 4;
let areas = tringleLength * tringleWidth;

console.log(`Question 1: \n The area of the rectangle is ${areas} \n`);

//----------------- question2 -----------------
let tempretureCelisues = 30;

let celisuesToFahrenheit = (tempretureCelisues * 9) / 5 + 32;
let fahrenheitToCelisues = ((celisuesToFahrenheit - 32) * 5) / 9;

console.log(
    `Question 2:\n${tempretureCelisues}°C is ${Math.round(celisuesToFahrenheit)}°F`
  );
  console.log(
    `${celisuesToFahrenheit}°F is ${Math.round(fahrenheitToCelisues)}°C\n`
  );
  

//----------------- question3 -----------------
let hours = 1;
let seconds = hours * 60 * 60;

console.log(`Question 3:\n${hours} hours = ${seconds} seconds\n`);

//----------------- question4 -----------------
let thingOne = 'thingOne';
let thingTwo = 'thingTwo';
console.log('Question 4:' + thingOne.concat(' and ', thingTwo)+ "," +'\n');


//----------------- question5 -----------------
let bill = 10.25 + 3.99 + 7.15;
let tip = 0.15;
total = bill * tip + bill;

console.log(
    `Question 5:\nTotal before tip: $${bill}\nTip value: $${tip}\nTotal after tip: $${total}\n`
  );
  

//----------------- question6 -----------------
var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';
var madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`;
console.log(`Question 6:\n${madLib}`);

//----------------- question7 -----------------
let firstName = 'zyad';
let interest = 'Programming';
let hobby = 'play football';
let awesomeMessage = `Hi, my name is ${firstName}. I love ${interest}, In my spare time, I like to ${hobby}.`;
console.log(`\nQuestion 7:\n${awesomeMessage}`);

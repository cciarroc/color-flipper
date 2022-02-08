const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// hex colors: # followed by 6 values from 0-9 and letters to represent 10-15

const button = document.querySelector("#button");
const color = document.querySelector(".color");


button.addEventListener("click", function(){
  // create hex value, target body, change background color of body, add value within color spacing
  let hexColor = '#'; // need loop that runs 6 times, one loop for each value
  // want each loop to grab random value from array
  // use let ; if const, will get error
  for(let i=0;i<6;i++){ //loop will run from 0 to 5; SIX times | i++ so it increments by 1
    hexColor += hex[getRandomNumber()];
  }
  color.innerText = hexColor;
  document.body.style.backgroundColor = hexColor;

})

const getRandomNumber = function(){
  return Math.floor(Math.random()*hex.length);
}

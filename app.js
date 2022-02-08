const colors = ["OldLace", "HoneyDew", "Linen", "LightGray", "Mistyrose", "PaleVioletRed", "Seashell", "Thistle", "WhiteSmoke", "CadetBlue", "RosyBrown", "AntiqueWhite", "Azure", "LightSteelBlue", "FloralWhite"];

const button = document.querySelector("#button");
const color = document.querySelector(".color");

button.addEventListener("click", function(){
  // when you click the button, you're changing the background color of the body
  // need to target the body of the document; how?
  // console.log(document.body);

// goal: get random number between 0 and 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  // change background color of body to random number in color array
  document.body.style.backgroundColor = colors[randomNumber];

  // change color span text to a random color
  color.innerText = colors[randomNumber];
})

// get a random number from the array; need a function to generate the random randomNumber
const getRandomNumber = function(){
  // math random gives random number between 0 and 0.99999; to get random between 0 & 3, multiply by length of the array
  // results in a random number between 0.something and 3.something
  // need to use the floor method to round DOWN to closest integer; will get numbers btw 0 and 3
  return Math.floor(Math.random()*colors.length);
  // passing value from (math random method * colors array length) to the math floor method
}

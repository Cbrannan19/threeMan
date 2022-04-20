let randomNumber1 = Math.floor(Math.random()*6 + 1);
let randomNumber2 = Math.floor(Math.random()*6 + 1);
console.log(randomNumber1, randomNumber2);
let randomDiceImage1 = "dice" + randomNumber1 + ".png";
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
console.log(randomDiceImage2);

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if(randomNumber1 === randomNumber2){
  if((randomNumber1+ randomNumber2) === 12){
    document.querySelector("h1").innerHTML = ("Waterfall");
  }else if((randomNumber1+randomNumber2 )=== 2){
    document.querySelector("h1").innerHTML = ("Everybody drink");
  }
  else{
    document.querySelector("h1").innerHTML = ("Pass out "+ randomNumber1 + " drinks");
  }
}else if((randomNumber1+ randomNumber2) === 7){
  document.querySelector("h1").innerHTML = ("Left");
}else if((randomNumber1+ randomNumber2) === 8){
  document.querySelector("h1").innerHTML = ("You Babey!");
}else if((randomNumber1+ randomNumber2) === 9){
  document.querySelector("h1").innerHTML = ("Right");
}else if((randomNumber1 === 1 && randomNumber2 === 4) || (randomNumber1 === 4 && randomNumber2 === 1)){
  document.querySelector("h1").innerHTML = ("...");
}else if((randomNumber1+ randomNumber2) === 3){
  document.querySelector("h1").innerHTML = ("Hello 3 man");
}

if(randomNumber1 === 3 || randomNumber2 === 3){
  document.querySelector("h3").innerHTML = ("3 man drink");

}

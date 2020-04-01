
cardArray=[
  {text: "A", image: "/img1"},
  {text: "A", image: "/img1"},
  {text: "B", image: "/img2"},
  {text: "B", image: "/img2"},
  {text: "C", image: "/img3"},
  {text: "C", image: "/img3"},
  {text: "D", image: "/img4"},
  {text: "D", image: "/img4"},
  {text: "E", image: "/img5"},
  {text: "E", image: "/img5"},
  {text: "F", image: "/img6"},
  {text: "F", image: "/img6"},
  {text: "G", image: "/img7"},
  {text: "G", image: "/img7"},
  {text: "H", image: "/img8"},
  {text: "H", image: "/img8"},
  {text: "I", image: "/img9"},
  {text: "I", image: "/img9"},
  {text: "J", image: "/img10"},
  {text: "J", image: "/img10"}

];

clickedCard=[];

matchedCard=[];

clicks=50;


var shuffleDeck=function(){
var currentIndex = cardArray.length
, temporaryValue
, randomIndex;


while (0 !== currentIndex) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;
  temporaryValue = cardArray[currentIndex];
  cardArray[currentIndex] = cardArray[randomIndex];
  cardArray[randomIndex] = temporaryValue;
}
}
shuffleDeck();
console.log(cardArray);
var board=document.getElementById("board");

for(var i=0; i<cardArray.length; i++){
var cardsBack=document.createElement("div");
cardsBack.classList.add("card");
cardsBack.setAttribute('id',"div_"+""+i);
board.appendChild(cardsBack);

// adding images to cardback
var images=document.createElement("img");
images.src = cardArray[i].image;
images.className="image";
cardsBack.appendChild(images);
cardsBack.addEventListener("click",function(){
if (clicks>0){
  clicks--;
  console.log(clicks);
  document.getElementById('counter').innerHTML=clicks.toString();
  var card = this;
  if (clickedCard.length < 2){
   card.classList.add("image");
    card.classList.add("match"); // add class of match to all cards
    clickedCard.push(card.innerHTML);
    matchedCard.push(card);
    console.log("this is card" + card);

console.log("this is clickedCard" + clickedCard);
    //// compares cards that are clicked on
    if (clickedCard.length === 2){
      if (clickedCard[0] === clickedCard[1]){

        console.log("It's a match!");
          clickedCard=[];
          matchedCard=[];
      } else {
        console.log("It's not a match!")
        setTimeout(turnOffAllCards, 1000);
        for (i=0; i<matchedCard.length; i++){
          matchedCard[i].classList.remove("match");
        }
        matchedCard=[];
         
      }
    }
  } 
  } 
}) 
} 

function turnOffAllCards(){
var frontCards = document.querySelectorAll("div.image:not(.match)");
for(var i = 0; i < frontCards.length; i++){
  frontCards[i].classList.remove("image");
  clickedCard=[];
  }
}
function ran_col(){ 
  var color; 
  var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here

  var x= document.getElementsByClassName("card");
  var i;
  for(i=0;i<x.length;i++)
  {
      color="#";
      color += letters[Math.floor(Math.random() * letters.length)];
      x[i].style.backgroundColor = color;
  }
  document.getElementById("board").style.display = "block";
}

function startgame(){
  window.open('/index')
}
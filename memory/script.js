// var array = [
//   "../img/black_duck150x150.jpg",
//   "../img/bluewinged_teal150x150.jpg",
//   "../img/bufflehead_drake-150x150.jpg",
//   "../img/canvasback150x150.jpg",
//   "../img/cinnamon_teal150x150.jpg",
//   "../img/dtile-back.png",
//   "../img/fulvous_whistling_duck150x150.jpg",
//   "../img/harlequin_duck150x150.jpg",
//   "../img/laysan_ducks150x150.jpg",
//   "../img/long-tailed-duck150x150.jpg",
//   "../img/northern_pintail_duck150x150.jpg",
//   "../img/northern_shoveler150x150.jpg",
//   "../img/redbreasted_merganser150x150.jpg"
// ];


// var arrayindex = 0;
// for (let index = 1; index <= 26; index++) {
//   var div1 = document.createElement("div");
//   div1.setAttribute("class", "memory-card");
//   div1.setAttribute("id", "divId_" + "" + index);
//   document.getElementById("game").appendChild(div1);
//   var img = document.createElement("img");
//   img.setAttribute("class", "front-face");
//   if (arrayindex === 13){
//     arrayindex = 0;
//   }
//   img.src = array[arrayindex];
//   arrayindex += 1;
//   img.setAttribute("id", "imgId_" + "" + index);
//   document.getElementById("divId_" + "" + index).appendChild(img);
// }


cardArray=[
  {text: "A", image: "../img/1.jpg"},
  {text: "A", image: "../img/1.jpg"},
  {text: "B", image: "../img/2.jpg"},
  {text: "B", image: "../img/2.jpg"},
  {text: "C", image: "../img/3.jpg"},
  {text: "C", image: "../img/3.jpg"},
  {text: "D", image: "../img/4.jpg"},
  {text: "D", image: "../img/4.jpg"},
  {text: "E", image: "../img/5.jpg"},
  {text: "E", image: "../img/5.jpg"},
  {text: "F", image: "../img/6.png"},
  {text: "F", image: "../img/6.png"},
  {text: "G", image: "../img/7.jpg"},
  {text: "G", image: "../img/7.jpg"},
  {text: "H", image: "../img/8.jpg"},
  {text: "H", image: "../img/8.jpg"},
  {text: "I", image: "../img/9.jpg"},
  {text: "I", image: "../img/9.jpg"},
  {text: "J", image: "../img/10.jpg"},
  {text: "J", image: "../img/10.jpg"}

];

clickedCard=[];

matchedCard=[];

clicks=50;

///////////////////////////////////////// SHUFFLE DECK
var shuffleDeck=function(){
// Using the Fisher-Yates (Knuth) shuffle
var currentIndex = cardArray.length
, temporaryValue
, randomIndex;

// While there remain elements to shuffle...
while (0 !== currentIndex) {
  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  // And swap it with the current element.
  temporaryValue = cardArray[currentIndex];
  cardArray[currentIndex] = cardArray[randomIndex];
  cardArray[randomIndex] = temporaryValue;
}
}
///////////////////////////////////////// End shuffle DECK
shuffleDeck();
console.log(cardArray);
var board=document.getElementById("board");

for(var i=0; i<cardArray.length; i++){

// appending cards to board
var cardsBack=document.createElement("div");
cardsBack.classList.add("card");
board.appendChild(cardsBack);

// adding images to cardback
var images=document.createElement("img");
images.src = cardArray[i].image;
images.className="image";
cardsBack.appendChild(images);



// Change color of cards on click
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
         // calls turnOffAllCards
      }
    } // close if statement
  } // close second if statement
  } // close click if statement
}) // event listener
} // close for loop

function turnOffAllCards(){
var frontCards = document.querySelectorAll("div.image:not(.match)");
for(var i = 0; i < frontCards.length; i++){
  frontCards[i].classList.remove("image");
  clickedCard=[];

}

}

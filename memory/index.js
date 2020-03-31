var array = [
  "../img/black_duck150x150.jpg",
  "../img/bluewinged_teal150x150.jpg",
  "../img/bufflehead_drake-150x150.jpg",
  "../img/canvasback150x150.jpg",
  "../img/cinnamon_teal150x150.jpg",
  "../img/dtile-back.png",
  "../img/fulvous_whistling_duck150x150.jpg",
  "../img/harlequin_duck150x150.jpg",
  "../img/laysan_ducks150x150.jpg",
  "../img/long-tailed-duck150x150.jpg",
  "../img/northern_pintail_duck150x150.jpg",
  "../img/northern_shoveler150x150.jpg",
  "../img/redbreasted_merganser150x150.jpg"
];


var arrayindex = 0;
for (let index = 1; index <= 26; index++) {
  var div1 = document.createElement("div");
  div1.setAttribute("class", "memory-card");
  div1.setAttribute("id", "divId_" + "" + index);
  div1.innerHTML = "Hello";
  document.getElementById("game").appendChild(div1);
  var img = document.createElement("img");
  img.setAttribute("class", "front-face");
  if (arrayindex === 13) {
    arrayindex = 0;
  }
  img.src = array[arrayindex];
  arrayindex += 1;
  img.setAttribute("id", "imgId_" + "" + index);
  document.getElementById("divId_" + "" + index).appendChild(img);
}



var vertical_ad = ["GOP", "Money", "Starbucks", "Dog", "Beer", "Surgery"];
var randomNumber=Math.floor(Math.random()*horizontal_ad.length);
document.getElementById("vert_ad").src = "images/" + vertical_ad[randomNumber] + ".jpg";
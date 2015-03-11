var horizontal_ad = ["Boring", "Viagra", "Human", "Guns", "Diet", "Gay"];
var randomNumber=Math.floor(Math.random()*horizontal_ad.length);
document.getElementById("hori_ad").src = "images/" + horizontal_ad[randomNumber] + ".jpg";
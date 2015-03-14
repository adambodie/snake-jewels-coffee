var numberArray=	[3,6,9,12,15,18,21,24,27,30];
var nameArray=		["coffee", "americano", "latte","cafe_au_lait", "espresso", "cappuccino", "latte_macchiato", "macchiato", "mocha", "turkish_coffee"];
var idArray=		[1421687912, 1421687931, 1420389984, 1420742286, 1420762792, 1420935511, 1420936068, 1420936708, 1422140510, 1422142130];
var numberIdArray=  ["003", "006", "009", "012", "015", "018", "021", "024", "027", "030"];
var titleArray=		["Coffee", "Americano", "Latte", "Cafe au Lait", "Espresso", "Cappuccino", "Latte Macchiato", "Macchiato", "Mocha", "Turkish Coffee"];
	    
var randomnumber=Math.floor(Math.random()*nameArray.length);
random_generator=numberArray[randomnumber];
random_generator2=nameArray[randomnumber];
random_generator3=idArray[randomnumber];
random_generator4=numberIdArray[randomnumber];
random_generator5=titleArray[randomnumber];
	    
var newUrl = document.getElementById('index').href;
newUrl = newUrl.replace("Variable", random_generator);
document.getElementById('index').href = newUrl;
	
var newName = document.getElementById('name').src;
newName = newName.replace("ID", random_generator3);
newName = newName.replace("NAME", random_generator2);
newName = newName.replace("NUMBER", random_generator4);
document.getElementById('name').src = newName;
	
document.getElementById('other_name').innerHTML = random_generator5;

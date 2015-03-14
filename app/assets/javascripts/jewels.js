
var numberArray=[1,4,7,10,13,16,19,22,25,28];
var nameArray=["Ruby","alexandrite","emerald","pyrite","opal","aquamarine","diamond","jade","pearl","sapphire"];
var idArray=[1420137571, 1420388601, 1420389585, 1420742122, 1420762324, 1420935182, 1420935661, 1420936416, 1422140199, 1422141890];
var numberIdArray= ["001", "004", "007", "010", "013", "016", "019", "022", "025", "028"];
var titleArray=["Ruby", "Alexandrite", "Emerald", "Pyrite", "Opal", "Aquamarine", "Diamond", "Jade", "Pearl", "Sapphire"];
	    
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

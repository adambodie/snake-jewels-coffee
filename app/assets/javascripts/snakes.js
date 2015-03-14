
var numberArray=[2,5,8,11,14,17,20,23,26,29];
var nameArray=["python","blackmamba","rattlesnake", "viper", "cornsnake","boaconstrictor","copperhead","gardensnake","cobra", "milksnake"];
var idArray=[1421687879, 1420388847, 1421687956, 1420742225, 1420762512, 1420935352, 1420935828, 1421687983, 1422140424, 1422142007];
var numberIdArray= ["002", "005", "008", "011", "014", "017", "020", "023", "026", "029"];
var titleArray=["Python","Black Mamba","Rattlesnake", "Viper", "Cornsnake","Boa Constrictor","Copperhead","Gardensnake","Cobra", "Milknake"];
	    
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

/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
var partOne = document.getElementById('matCount');
partOne.innerHTML = 11;
//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
var partTwo = document.getElementById('msgCount');
partTwo.innerHTML = 23;
//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
var partThree = document.getElementById('fullname');
partThree.innerHTML = 'Ronald McDonald';
//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
var partFour = document.getElementById('age');
partFour.innerHTML = 63;
//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var jobFive = document.createElement('div');
jobFive.id= 'job';
jobFive.innerHTML = 'Clown and Restauranteur';
data.appendChild(jobFive);
    
//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var hobbySix = document.createElement('div');
hobbySix.id = 'hobbies';
hobbySix.innerHTML = 'Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
data.appendChild(hobbySix);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var locationSeven = document.createElement('div');
locationSeven.id = 'location';
locationSeven.innerHTML = 'Honolulu, HI';
data.appendChild(locationSeven);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var wantsEight = document.createElement('div');
wantsEight.id = 'wants';
wantsEight.innerHTML = 'Looking for a Mrs. McDonald.';
data.appendChild(wantsEight);
//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var paraNine = document.createElement('p');
paraNine.id = 'pro2';
paraNine.innerHTML = "I'm a simple man. I like beans and rice.";
profile.appendChild(paraNine);
//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var nameTen = document.getElementsByClassName ('firstName');
console.log(nameTen.length); //3 total
nameTen[0].innerHTML = 'Wendy'; //[0] targets first element in the array

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var ageEleven = document.getElementsByClassName('otherAge');
ageEleven[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var statusTwelve = document.getElementsByClassName('status');
statusTwelve[0].innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
var nameThirteen = document.getElementsByClassName('firstName');
nameThirteen[1].innerHTML = "Peko Chan";
//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
var ageFourteen = document.getElementsByClassName('otherAge');
ageFourteen[1].innerHTML = 68;
 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto





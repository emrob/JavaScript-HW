// Episode 1

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

//returns Keith as name is global, so it can be accessed within the printname function


// Episode 2

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// 3 is returned as it looks within the function and uses this over the other score. If you comment out 'var score = 3', it will return 5 since the function can access the other score as its defaulted to var. If you ask the consol to return score, it will return 5 since it looks at the top first, and in that case function isnt called


// Episode 3

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// as with the previous example, it ignores the first array, and uses the aray called within the function. This is updating the original myAnimals array. If you comment out the myAnimals array within the function, it will refer to the first myAnimals array


// Episode 4

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
//
// first it updates suspectThree to Harvey and returns Harvey when saying who the suspects include. This works as it is all done within the function.... but when the log is called outside the function it goes to the global variable as Keith is now listed as suspect three. The update has not been invoked because vars outside functions are looked at first - hoiked?


// Episode 5

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// Poirot is returned because the log is calling the detectiveInfo function which includes an updated name. If you remove the 'detective['name'] = 'Poirot'' the name will remain as Ace Ventura
//

// Episode 6

var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);




// Rick is returned because this is the global variable defined at the top. If this is removed then the murderer is listed as not defined meaning there is an error. In order for marc to be returned, you need to add 'console.log(murderer);' after 'var murderer = 'marc';' and just call outerFuction, so remove the console.log at the end


// Episode 7 - Make up your own episode/s!
//
// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.

var weapon1 = "knife";
var weapon2 = "poison";
var weapon3 = "gun";


var murderWeapon = function(weapon3) {
  console.log(`The murder weapon was a..... ${weapon3}`);
};

murderWeapon("rope");

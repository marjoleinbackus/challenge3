


var questionArray = [
  ["YOUR IDEA OF THE PERFECT SHORT TRIP", "Discovering the local party scene", "Being outdoors - camping, hiking, and everything else", "Learn something new - be it arts, culture, or history", "Complete relaxation - good food, long walks, no stress at all"], 
  ["YOUR FAVORITE FOOD?", "Fish", "Fries", "I love to discover the local food culture", "Everything from vegan food to bratwurst - I'd like to have a choice"], 
  ["WHERE DO YOU LIKE TO STAY WHILE TRAVELLING?", "I love couchsurfing and hostels - it's cheap and I meet many new people!", "Camping", "A new design hotel or an Airbnb room", "A cosy holiday apartment with your own kitchen"]
];

//populate document
for (var i = 0; i < questionArray.length; i++){
  document.write("<form><span class='question'>" + questionArray[i][0] + "</span><br>");
  for (var x = 1; x < 5; x++){
    document.write("<input type='radio' class='answer' name='answer' value='" + questionArray[i][x] + "'>" + questionArray[i][x] + "");
  }
  document.write("</form><br>");
}

var characterAnswer = [
  [1, 4, 3,'Berlin, Baby!'],
  [1, 2, 2,'It is Bavaria for you!'],
  [2, 1, 0,'Go to Cologne!'],
  [3, 0, 3,'You are a perfect match for the North Sea.'],
];



//add click check event listeners
var inputs = document.getElementsByTagName('input');
for(var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('click', check);
}

var userAnswers = [];

//check questions answers
function check(){
  userAnswers = [];
  var c = 0;
  for(var i = 0; i < inputs.length; i++){
    if(inputs[i].checked) {
      userAnswers.push(i%4);
      c++;
    }
  }
  if(c==questionArray.length) rate();
}

//rate the answers per char
function rate(){
  console.log(userAnswers);
  for(var i = 0; i < userAnswers.length; i++){
    for(var j = 0; j < characterAnswer.length; j++){
      characterAnswer[j][4] = 0;
      for(var x = 0; x < 4; x++){
        if(userAnswers[i] == characterAnswer[j][x])
          characterAnswer[j][4]++;
      }
    }
  }
  answer();
}

function answer(){
  var a = 0, t;
  for(var j = 0; j < characterAnswer.length; j++){
    if(characterAnswer[j][4] > a) {
      a = characterAnswer[j][4];
      t = characterAnswer[j][3];
    }
  } 
  alert(t);
}

//flag stuff
var h = $('.flag').width();
for(var i = 0; i < h; i++){
    var flagElement = $("<div class='flag-element'>");
    flagElement.css('background-position', -i + "px 0");
    flagElement.css('-webkit-animation-delay', i * 10 + 'ms');
    flagElement.css('-moz-animation-delay', i * 10 + 'ms');
    flagElement.css('-ms-animation-delay', i * 10 + 'ms');
    flagElement.css('animation-delay', i * 10 + 'ms');
    $('.flag').append(flagElement);
}

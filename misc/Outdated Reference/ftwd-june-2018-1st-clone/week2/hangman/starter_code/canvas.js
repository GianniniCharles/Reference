
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secret = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200,800);
};

HangmanCanvas.prototype.drawLines = function () {
  var that = this;
  var startingX = 400;
  var startingY = 700;
  var lineWidth = 50;
  var distanceBetween = lineWidth + 25;
  this.ctx.lineWidth = 4;
  this.ctx.beginPath(); 
  this.secret.split('').forEach(function(eachLetter, index){
    that.ctx.moveTo(startingX, startingY);
    that.ctx.lineTo(startingX+lineWidth, startingY);
    startingX += distanceBetween;
  });
  this.ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function (wordInProgress) {
  var that = this;
  var startingX = 410;
  var startingY = 680;
  var distanceBetween = 75;
  this.ctx.font = '40px serif';
  for(var i = 0; i < wordInProgress.length; i++ ){
    if(wordInProgress[i]){
      that.ctx.fillText(wordInProgress[i], startingX, startingY);
    }
    startingX += distanceBetween;
  }
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font = '40px serif';

  var startingX = 800;
  var startingY = 200;
  var distanceBetween = 50;
  var difference = 10 - errorsLeft;

  if(difference <= 5){
    this.ctx.fillText(letter, startingX + (distanceBetween*difference), startingY);
  }else{
    this.ctx.fillText(letter, startingX + (distanceBetween*(difference - 5)), startingY+distanceBetween);
  }
};

HangmanCanvas.prototype.drawHangMan = function (shape) {
  switch (shape){
    case 'triangle':
    console.log('drawing the triangle');
    break;
    case 'firstLine':
    console.log('drawing the first vertical line');
    break;
    case 'secondLine': 
    console.log('drawing the horizontal line');
    break;
    case 'thirdLine':
    console.log('drawing the third line, gallows are complete');
    break;
    case 'head':
    console.log('drawing the head');
    break;
    case 'torso':
    console.log('drawing the torso');
    break;
    case 'leftLeg':
    console.log('drawing leftLeg');
    break;
    case 'rightLeg':
    console.log('drawing rightLeg');
    break;
    case 'leftArm':
    console.log('drawing left arm');
    break;
    case 'rightArm':
    console.log('drawing right arm');
    break;
  }
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

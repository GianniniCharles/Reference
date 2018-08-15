// window.onload = function() {
var myCanvas = document.getElementById('theCanvas');
var ctx = myCanvas.getContext('2d');
var currentGame;
var theImage;






var Car = function(){
  this.x = 240;
  this.y = 600;
  this.width = 50;
  this.height = 85;
  this.img = 'images/car.png';   
  console.log(this);        
}

Car.prototype.drawCar = function(){
  var that = this;
  theImage = new Image();
  theImage.src = that.img;
  theImage.onload = function(){
    ctx.drawImage(theImage, that.x, that.y, that.width, that.height)
  }
}

Car.prototype.move = function(whichKey, speed){
  ctx.clearRect(this.x, this.y, this.width, this.height);

  switch(whichKey){
    case 'ArrowLeft':
    if(this.canMove(this.x - speed, this.y)){
      this.x -=speed;
    }
    break;
    case 'ArrowRight': 
    if(this.canMove(this.x + speed, this.y)){
      this.x +=speed;
    }
    break;
    case 'ArrowUp':
    if(this.canMove(this.x, this.y -speed)){
      this.y -= speed;
    }
    break;
    case 'ArrowDown': 
    if(this.canMove(this.x, this.y + speed)){
      this.y +=speed;
    }
  }
  ctx.drawImage(theImage, this.x, this.y, this.width, this.height);
}

Car.prototype.canMove = function(futurex, futurey){
  if(
    futurex + this.width >= currentGame.obstacle.x &&
     futurex <= currentGame.obstacle.x + currentGame.obstacle.width &&
     futurey + this.height >= currentGame.obstacle.y &&
     futurey <= currentGame.obstacle.y + currentGame.obstacle.height
    ){
      return false
    } else if(
      futurex + this.width >= 500 ||
      futurex <= 0 ||
      futurey + this.height >= 700 ||
      futurey <= 0
    ){
      return false
    }
    return true;

}



var Obstacle = function(x,y,width,height){
  this.x = x;
  this.y = y;
  this.height = height;
  this.width = width;
}

Obstacle.prototype.draw = function(){
  ctx.fillRect(this.x, this.y, this.width, this.height);
}










  document.getElementById("start-button").onclick = function() {
    currentGame = new Game();
    theCar = new Car();
    theObstacle = new Obstacle(300,300,100,300);
    currentGame.car = theCar;
    currentGame.obstacle = theObstacle;


    currentGame.car.drawCar();
    currentGame.obstacle.draw();
 
    
  };

 
var blah;
  document.onkeydown = function(event) {
    clearInterval(blah); 
    if (event.key === 'ArrowLeft'|| event.key ==='ArrowRight'|| event.key ==='ArrowUp'|| event.key ==='ArrowDown'){
      event.preventDefault();

       blah = setInterval(function(){
        theCar.move(event.key, 2);
      }, 10);
    }
  }

  document.onkeyup = function(){
    clearInterval(blah);
  }
  





// };



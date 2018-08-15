function Pokemon(nameArg, attackPointsArg, hpArg){
    this.name = nameArg;
    this.attackPoints = attackPointsArg;
    this.hp = hpArg;
  }
  
  
  Pokemon.prototype.attack = function(whoToAttack){
    whoToAttack.hp -= this.attackPoints;
  }
  
  
  
  
  
  var char = new Pokemon('Charmander', 20, 80);
  var squir = new Pokemon('Squirtle', 16, 95);
  
  console.log(char);
  console.log('---------')
  console.log(squir);
  
  squir.attack(char);
  
  
  
  console.log(char);
  console.log('---------')
  console.log(squir);
  
  
  
  
  
  
  // function Item(name, price){
  //   this.name = name;
  //   this.price = price;
  // }
  
  // Item.prototype.calculatePrice = function() {
  //  return(this.price);
  // }
  
  // var ball = new Item('soccer ball', 15);
  // console.log(ball.calculatePrice());
  // // => 15
  
  // var fruit = new Item('fruit', 10);
  // console.log(fruit.calculatePrice());
  // => 9.5
  
  
  
  // function Car(theCarName, numOfDoors){
  //   this.name = theCarName;
  //   this.doors = numOfDoors;
  //   this.wheels = 4;
  //   this.windshield = true;
  // }
  
  //   Car.prototype.breakTheWindshield = function(){
  //     this.windshield = false;
  //   }
  //   Car.prototype.sayMyName = function() {
  //     console.log("My name is " + this.name);
  //   };
  
  
  
  
  
  
  // var car1 = new Car('honda', 2);
  // var car2 = new Car('tesla', 4);
  
  // car1.breakTheWindshield();
  
  
  // console.log(car1)
  // console.log('-----------')
  // console.log(car2)
  
  
  
  
  
  
  
  
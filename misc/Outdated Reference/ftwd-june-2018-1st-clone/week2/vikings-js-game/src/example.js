function Soldier (healthArg, strengthArg) {
    this.health = healthArg;
    this.strength = strengthArg;
    // this.attack =  function () {
    //   return this.strength;
    // }
  }

  Soldier.prototype.attack = function(){
      return this.strength;
  }

  Soldier.prototype.receiveDamage = function(amountOfDamage){
    this.health -= amountOfDamage;
  }


  function Viking (name, health, strength){
      Soldier.call(this, health, strength)
      this.name = name;
  }

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;


Viking.prototype.receiveDamage = function(amountOfDamage){
    this.health -= amountOfDamage;

    if(this.health > 0){
        return `${this.name} has received ${amountOfDamage} points of damage`
    } else {
        return `${this.name} has died in act of combat`
    }

  }

  Viking.prototype.battleCry = function(){
      return "Odin Owns You All!"
  }



  function Saxon(health, strength){
      Soldier.call(this, health, strength);
  }

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


Saxon.prototype.receiveDamage = function(amountOfDamage){
    this.health -= amountOfDamage;

    if(this.health > 0){
        return `A Saxon has received ${amountOfDamage} points of damage`
    } else {
        return `A Saxon has died in combat`
    }

  }

  function War(){
      this.vikingArmy = [];
      this.saxonArmy = [];
  }

  War.prototype.addViking = function(vikingToAdd){
      this.vikingArmy.push(vikingToAdd);
  }

  War.prototype.addSaxon = function(saxonToAdd){
    this.saxonArmy.push(saxonToAdd);
}

War.prototype.vikingAttack = function(){
    var vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
    var saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
    var randViking = this.vikingArmy[vikIndex];
    var randSaxon = this.saxonArmy[saxIndex];

    var result = randSaxon.receiveDamage(randViking.attack())
    if(randSaxon.health <=0){
        this.saxonArmy.splice(saxIndex, 1);
    }
    return result;
}

War.prototype.saxonAttack = function(){
    var vikIndex = Math.floor(Math.random()*this.vikingArmy.length);
    var saxIndex = Math.floor(Math.random()*this.saxonArmy.length);
    var randViking = this.vikingArmy[vikIndex];
    var randSaxon = this.saxonArmy[saxIndex];

    var result = randViking.receiveDamage(randSaxon.attack())
    if(randViking.health <=0){
        this.vikingArmy.splice(vikIndex, 1);
    }
    return result;
}

War.prototype.showStatus = function(){
    if(this.vikingArmy.length === 0){
        return "Saxons have fought for their lives and survive another day..."
    }
    if(this.saxonArmy.length === 0){
        return "Vikings have won the war of the century!"
    }
    return "Vikings and Saxons are still in the thick of battle."
}

// create the war
var theWar = new War();
// create the vikings
var viking1 = new Viking("Ragnar the Great", 241, 111);
var viking2 = new Viking("Erlocht", 75, 213);
var viking3 = new Viking("Leafe Brendanton", 225, 100);
var viking4 = new Viking("Hinsen Broskvi", 250, 50);
var viking5 = new Viking("General Kon", 180, 100);
// create the saxons
var saxon1 = new Saxon(111, 85);
var saxon2 = new Saxon(300, 50);
var saxon3 = new Saxon(50, 300);
var saxon4 = new Saxon(350, 99);
var saxon5 = new Saxon(150, 285);
// assemble the vikings into the army
theWar.addViking(viking1);
theWar.addViking(viking2);
theWar.addViking(viking3);
theWar.addViking(viking4);
theWar.addViking(viking5);
// assemble the saxons
theWar.addSaxon(saxon1);
theWar.addSaxon(saxon2);
theWar.addSaxon(saxon3);
theWar.addSaxon(saxon4);
theWar.addSaxon(saxon5);




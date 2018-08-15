
var theButton = document.getElementById('the-button');
var theList = document.getElementsByClassName('theList')[0];


theButton.onclick = function(){

    var howManyTimes = document.getElementById('quantity');
    var quantity = howManyTimes.value;
    
    if(quantity ===""){quantity = 1};

    for(var i = 0; i < quantity; i++){

    var theInput = document.getElementById('the-input');

    var whatToAppend = theInput.value;

    var newNew = document.createElement('li');

    newNew.innerHTML = whatToAppend;

    theList.appendChild(newNew);
    }

    theInput.value = "";
    howManyTimes.value = "";


  }




  var blah = 




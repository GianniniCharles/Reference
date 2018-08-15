var words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'mysteriously',
    'crackpot'
  ];


  function findLongestWord(wordsArray){
      var longestWord = "";
      wordsArray.forEach(function(eachWord){
        if(eachWord.length > longestWord.length){
            longestWord = eachWord;
        }
    });
    return(longestWord);
  }

//   console.log(   findLongestWord(words)   );



  var numbers = [5,5,5,5,5,7,7,7,7,7];


  function calculateSum(arrayOfNumbers){
      var sum = 0;
      arrayOfNumbers.forEach(function(oneParticularNumber){
        sum += oneParticularNumber
      });
        return sum;
  }

//   console.log(   calculateSum(numbers)    );

function calculateAverage(numberArray){
    return   (calculateSum(numberArray) / numberArray.length)
}

// console.log(  calculateAverage(numbers)          )



var wordsWithDuplicates = [
    'crab',
    'crab', 
    'crab',
    'poison',
    'contagious',
    'simple',
    'bring',
    'sharp',
    'simple',
    'simple',
    'playground',
    'poison',
    'communion',
    'simple',
    'simple',
    'simple',
    'bring'
  ];

  function uniquifyArray(theArray){

    var newArray = [];

    theArray.forEach(function(eachWord){

        if(newArray.indexOf(eachWord) === -1){
            newArray.push(eachWord)
        }
// .includes is newer method that accomplishes the same thing with cleaner syntax

        // if(!newArray.includes(eachWord)){
        //     newArray.push(eachWord)
        // }
    });
    return newArray
}

// console.log(uniquifyArray(wordsWithDuplicates));


 function doesItExist(arrayOfWords, wordToSearchFor){
     var doesIt = false;
     arrayOfWords.forEach(function(eachWord){
        if(eachWord === wordToSearchFor){doesIt = true}
     });
    return doesIt
 }
//  console.log(  doesItExist(wordsWithDuplicates, 'kentucky')   )


function numberOfTimes(theArray, theWord){
    var count = 0;
   theArray.forEach(function(eachWord){
        if(eachWord === theWord){
            count++;
        }
     });
    return count;
}

console.log( numberOfTimes(wordsWithDuplicates, 'rain')  );


// var myArray = [5,5,5,5,5,6,7,8,9,10];

//without using .map, we can use forEach instead
// var resultArray = [];
// myArray.forEach(function(num){
//     resultArray.push(num+1);
// });

// console.log(myArray);
// console.log(resultArray);

// the same function transalted using a .map function 
//  var newArray = myArray.map(function(number){
//     return number + 1;
// });

// console.log('original array', myArray);
// console.log('mapped array', newArray);
// var cities = ["miami", "barcelona", "madrid"];

// var capsCities = cities.map(function(oneCity){

//     return oneCity[0].toUpperCase() + oneCity.substr(1);
//     //both of these work
//     // return oneCity.charAt(0).toUpperCase() + oneCity.slice(1);

// });

// console.log('original array', cities)
// console.log('capitalized cities', capsCities);
// ["Miami", "Barcelona", "Madrid"]



// var numbers = [10,10,20,15,5,4,6,7,3,13,17];
//add up all the numbers using a forEach loop

// var sum = 0;
// numbers.forEach(function(number){
//     sum+=number;
// });

// console.log('numbers to add', numbers);
// console.log('sum', sum);

// adding up all the numbers using a .reduce method
// numbers = [10,10,20,15,5,4,6,7,3,13,17];
// var theSum = numbers.reduce(function(sum, placeholder){
//     return sum + placeholder;
// },0);

// console.log('numbers to add', numbers);
// console.log('sum', theSum);

// var theArray = [
//                 {name: 'dogeCoin', price: 10}, 
//                 {name: 'sia', price: 20},
//                 {name: 'garlicBreadCoin', price: 40}
//                 ]

// var totalPrice = theArray.reduce(function(sum, eachCoin){
//     return sum + eachCoin.price;
// },0);


// console.log('total price of coins', totalPrice);


// var arrayToFilter = [1,2,3,4,5,6,7,8,9,10,12,5,4,3,7,9,11,13,14,15,17];

// var filteredArray = [];
// arrayToFilter.forEach(function(eachNum){
//     if(eachNum < 10){
//         filteredArray.push(eachNum);
//     }
// });
// console.log('original array', arrayToFilter);
// console.log('filtered array', filteredArray);

// var arrayToFilter = [1,2,3,4,5,6,7,8,9,10,12,5,4,3,7,9,11,13,14,15,17];
// var filteredArray = arrayToFilter.filter(function(eachNum){
//     return eachNum < 10;
// });
// console.log('original array', arrayToFilter);
// console.log('filtered array', filteredArray);



// var people  = [
//     {name: 'guy', age: 23},
//     {name: 'Karen', age: 19},
//     {name: 'John', age: 33},
//     {name: 'Ricardo', age: 17},
//     {name: 'Charlie', age: 20},
//     {name: 'Rita', age: 30},
//     {name: 'Mary', age: 26},
// ]

// var peopleOverTwentyOne = people.filter(function(person){
//     return person.age >= 21;
// });

// console.log('original list', people);
// console.log('people over 21', peopleOverTwentyOne);


//SORT METHOD

// var letters = ['a', 'z', 'w', 'f', 'b', 'e', 'c']
//be default, it works for sotring alphabetically

// letters.sort();

// console.log(letters);
// [ 0, 1, 112, 18, 22, 223, 23, 64, 68, 9, 99 ]

// var numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];


// numbers.sort(function(a,b) {
//     if( a > b){
//         return 1;
//     }else if (b > a){
//         return -1;
//     }else {
//         return 0;
//     }
// });

// console.log(numbers);
//[ 0, 1, 9, 18, 22, 23, 64, 68, 99, 112, 223 ]


// var words = ['cat', 'dog', 'dentist', 'rhincerous', 'mysteriously', 'lie', 'javascript', 'bob']
// words.sort(function(a,b){
//     if( a.length > b.length){
//         return 1;
//     }else if (b.length > a.length){
//         return -1;
//     }else {
//         return 0;
//     }
// });
// console.log(words);

// var foods = [
//     {name: 'pizza', calories: 1000},
//     {name: 'ice cream', calories: 850},
//     {name: 'celery', calories: 5},
//     {name: 'french fries', calories: 500},
//     {name: 'broccoli', calories: 35},
//     {name: 'Milkshake', calories: 850},
// ]

// foods.sort(function(a,b){
//     return b.calories - a.calories;
// });

// console.log(foods);


//.reverse method simply reverses an aray in place
// var numbers = ['dog', 'cat', 'eggs', 'bacon'];

// numbers.reverse();

// console.log(numbers);


// var cities = ['miami', 'barcelona', 'mardid', 'berlin', 'paris', 'amsterdam'];
 
// if you give the .spliace method more than 2 arguments, the 3rd arguments (any any additional)
// will be inserted into the array in place of the stuff you jsut deleted
// cities.splice(4,2, "orleans", "sao paolo");


//if you give the .splice method only 2 arguments, it will simply delete elements fromt he array
//the firstargument is the index at which you want to begin deleting, and the 2nd argument is the number of things to delete
// cities.splice(2,2)

// console.log(cities);
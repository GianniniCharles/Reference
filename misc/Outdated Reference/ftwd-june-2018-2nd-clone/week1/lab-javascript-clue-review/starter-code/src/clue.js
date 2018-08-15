
// Characters Collection
var charactersArray = [

{first_name:   'Jacob',
last_name:    'Green',
color:        'green',
description:  'He has a lot of connections',
age:          45,
image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
occupation:   'Entrepreneur'},


{first_name:   'Doctor',
last_name:    'Orchid',
color:        'white',
description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
age:          26,
image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
ocupation:   'Scientist'
},

{
first_name:   'Victor',
last_name:    'Plum',
color:        'purple',
description:  'Billionare video game designer',
age:          22,
image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
occupation:   'Designer'
}
]

// Weapons
var weaponsArray = [
{name: 'rope'       ,weight: 10},
{name: 'knife'      ,weight: 8},
{name: 'candlestick',weight: 2},
{name: 'dumbbell'   ,weight: 30},
{name: 'poison'     ,weight: 2},
{name: 'axe'        ,weight: 15},
{name: 'bat'        ,weight: 13},
{name: 'trophy'     ,weight: 25},
{name: 'pistol'     ,weight: 20},
]

var roomsArray = [
{name: 'Dinning Room'},
{name: 'Conservatory'},
{name: 'Kitchen'},
{name: 'Study'},
{name: 'Library'},
{name: 'Billiard Room'},
{name: 'Lounge'},
{name: 'Ballroom'},
{name: 'Hall'},
{name: 'Spa'},
{name: 'Living Room'},
{name: 'Observatory'},
{name: 'Theater'},
{name: 'Guest House'},
{name: 'Patio'},
]


function randomSelector(theArr){
    return theArr[Math.floor(Math.random() * theArr.length)]
   
   }

   
   function pickMistery(){
    var mysteryEnvelope = [];
    mysteryEnvelope.push(randomSelector(charactersArray));
    mysteryEnvelope.push(randomSelector(weaponsArray));
    mysteryEnvelope.push(randomSelector(roomsArray));
    return mysteryEnvelope;
}

function revealMistery(arr){

    return arr[0].first_name + ' ' + arr[0].last_name +' killed Mr.Boddy using the ' + arr[1].name + ' in the ' + arr[2].name +'!!!!'

}











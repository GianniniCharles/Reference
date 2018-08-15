// document.getElementById('poke-button').onclick = function(){

//     const theID = document.getElementById('poke-input').value;


//     axios.get('https://pokeapi.co/api/v2/pokemon/'+theID)
//     .then((responseFromAPI)=>{

//         console.log(responseFromAPI)

//         document.getElementById('poke-info')
//         .innerHTML = `
//         <h3>${responseFromAPI.data.name}</h3> 
//         <img src=${responseFromAPI.data.sprites.front_default}>
//         `
        
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// }

//-------------------------------------------------------


$('#list-button').click(function(){
   axios.get('https://ih-crud-api.herokuapp.com/characters')
   .then((response)=>{

       $('#characters-div').empty();
       response.data.forEach((oneCharacter)=>{
           const newChar = `
           <div>
           <h5>Name: ${oneCharacter.name}</h5>
           <p>Occupation: ${oneCharacter.occupation}</p>
           <p>Weapon: ${oneCharacter.weapon}</p>
           </div>
           <hr>
           `
           $('#characters-div').append(newChar);
       })
       
   })
});



$('#createBtn').click(function(){
    const theName       = $('#charName').val();
    const theOccuptaion = $('#charOcc').val(); 
    const theWeapon     = $('#charWeapon').val();


    const data = {
        name: theName,
        occupation: theOccuptaion,
        weapon: theWeapon
    }

    axios.post('https://ih-crud-api.herokuapp.com/characters', data)
    .then((response)=>{
        $('#list-button').click();
    })
    .catch((err)=>{
        console.log(err);
        console.log('try filling in all the input boxes');
    })

})




// to edit 

// const data = {
//     name: "blah",
//     occupation: "whatever",
//     weapon: "blah2"
// }

// const someVariable = $someinput.val()

// axios.patch('https://ih-crud-api.herokuapp.com/characters/'+someVariable, data)
//     .then((response)=>{
//         $('#list-button').click();
//     })
//     .catch((err)=>{
//         console.log(err);
//         console.log('try filling in all the input boxes');
//     })



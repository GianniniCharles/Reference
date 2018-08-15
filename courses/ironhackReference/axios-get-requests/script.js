
// vanilla javascript
// document.getElementById('poke-button').onclick = function() {

//   const theID = document.getElementById('poke-input').value;
//   axios.get(`https://pokeapi.co/api/v2/pokemon/${theID}/`) //async, so promise
//   .then((responseFromAPI)=>{
//     document.getElementById('poke-info')
//     .innerHTML = `<h3>${responseFromAPI.data.name}</h3>
//                   <p><img src = "${responseFromAPI.data.sprites.front_default}"></p>

//     `
//   })
  
//   .catch((err)=>{
//     console.log(err); //we're on front end so no next(err) stuff.
//   })


// }

//-----------------------------------------------------------------------------

//Jquery way

$('#list-button').click(function(){
  console.log('you clicked the button')


    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((res)=>{
      
      $('#characters-div').empty();//this prevents multiple posts of the same list

        res.data.forEach((oneCharacter)=>{
            const newChar = `
            <div>
            <h5>Name: ${oneCharacter.name}</h5>
            <p>Occupation: ${oneCharacter.occupation}</p>
            <p>Weapon: ${oneCharacter.weapon}</p>
            <hr>

            </div>
            `

            $('#characters-div').append(newChar)
        })
    })


  });




  $('#createBtn').click(function(){
   const theName          = $('#charName').val();
   const theOccupation    = $('#charOcc').val();
   const theWeapon        = $('#charWeapon').val();

    const data = {
      name: theName,
      occupation: theOccupation,
      weapon: theWeapon,
    }
console.log(data);
    //data makes sure that we we have the params set up
   //the object below is req.body
   //for our API, req.body to work may only have name, occupation, weapon, debt.
   axios.post('https://ih-crud-api.herokuapp.com/characters', data)
   
   .then((response)=>{

    $('#list-button').click();

   })

   .catch((err)=>{
     console.log(err);
   })



  })












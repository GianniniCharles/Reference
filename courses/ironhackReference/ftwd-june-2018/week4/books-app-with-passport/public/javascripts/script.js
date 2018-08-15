
$('#get-authors').click(function(){

  axios.get('/api/authors')
  .then((response)=>{


    $('.author-list').empty();

    response.data.forEach((eachAuthor)=>{
      const newAuthorDiv = `
      <h4> ${eachAuthor.name} ${eachAuthor.lastName} </h4>
      <p> Birthday: ${eachAuthor.birthday} </p>
      <p> Born: ${eachAuthor.nationality} </p>
      <hr>
      `
      $('.author-list').append(newAuthorDiv);
    })


  })






});
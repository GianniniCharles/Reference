$(document).ready(function() {

    
    var firstCatDiv = $('.cat:first');
    
    console.log('first one', firstCatDiv);
    
    console.log('hello');

    var lastCatDiv = $('.cat:last');
        
  
    showMeTheDiv(lastCatDiv);

    var colorfulBox = $('.example-div');

    
    // $("button").click(function(event) {
    //     colorfulBox.toggleClass('.example-div').toggleClass('smaller-purple').toggleClass('with-border');
    // });

    $('.cat').click(function(event){
        $(this).addClass('awesome-button');
    })

    
    
    // $('button').click(function(){
    //     colorfulBox.fadeToggle(5000);
    // })



    $('.google').click(function(event){
        event.preventDefault();
        colorfulBox.fadeToggle(5000);

    })


    $('.form-button').click(function(e){
        e.preventDefault();
        var name = $('.the-name').val();
        console.log(name);
        $('.super-cool-list').prepend(name);

    })


});


function showMeTheDiv(whichDiv){
    console.log('last one', whichDiv)
}





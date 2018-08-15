$( document ).ready(function() {
    // $('.crust').removeClass('crust-gluten-free');
    // $('.sauce').removeClass('sauce-white');
    // $('.btn-sauce').removeClass('active');
    // $('.btn-crust').removeClass('active');
    // $('.price ul li:nth-child(4)').hide();
    // $('.price ul li:last').hide();
// see last line of this file for an alternative to these preceding 4 lines

$('.btn-pepperonni').data('price', 1);
$('.btn-mushrooms').data('price', 1);
$('.btn-green-peppers').data('price', 1);
$('.btn-sauce').data('price', 3);
$('.btn-crust').data('price', 5);


function calculateTotalPrice(){
    var allTheButtons = $('.btn');
    var price = 10;

 for(var i =0; i < allTheButtons.length; i++){
    if(allTheButtons.eq(i).hasClass('active')){
        price += allTheButtons.eq(i).data('price');
    }
 }
    $('strong').text('$' + price);
}






$('.btn').click(function(){
    $(this).toggleClass('active');
    calculateTotalPrice();
})
   

$('.btn-pepperonni').click(function(){
    $('.pep').toggle();
    $('.price ul li:first').toggle();
});

$('.btn-mushrooms').click(function(){
    $('.mushroom').toggle();
    $('.price ul li:nth-child(2)').toggle();
});

$('.btn-green-peppers').click(function(){
    $('.green-pepper').toggle();
    $('.price ul li:nth-child(3)').toggle();
});


$('.btn-crust').click(function(){
    $('.crust').toggleClass('crust-gluten-free');
    $('.price ul li:nth-child(4)').toggle();
});

$('.btn-sauce').click(function(){
    $('.sauce').toggleClass('sauce-white');
    $('.price ul li:last').toggle();
});












$('.btn-crust').click();
$('.btn-sauce').click();
});

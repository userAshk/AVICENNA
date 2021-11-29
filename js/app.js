//SHOW DIAGNOSTIC CARDS

$(document).ready(function(){
    $("#diagnostic").click(function(e) {
        $('.diagcard').toggleClass('diagcardShow')
    });

    $('body').click(function(e){
        $('.diagcardShow').toggleClass('diagcard')
    })


    $('#nerseCard').click(function(e){
        $('.nerse__card').toggleClass('nerse__cardShow')
    })
});

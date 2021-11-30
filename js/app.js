//SHOW DIAGNOSTIC CARDS

$(document).ready(function(){
    $("#diagnostic").click(function(e) {
        // $('#diagnostic').css("background-color", "#00B43E")
        $('.diagcard').toggleClass('diagcardShow')
    });

    $('body').click(function(e){
        $('.diagcardShow').toggleClass('diagcard')
    })


    $('#nerseCard').click(function(e){
        $('.nerse__card').toggleClass('nerse__cardShow')
    })
});
// bunner changng
// setInterval(function(){
//     $('.banner').toggleClass('banner2')
//     $('.banner2').toggleClass('banner3')
// }, 1000)
//SHOW DIAGNOSTIC CARDS

$(document).ready(function(){
    $("#diagnostic").click(function(e) {
        $('.diagcard').toggleClass('diagcardShow');
        $('.diag__name_hidden').toggleClass('diag__name');
    });

    $('#nerseCard').click(function(e){
        $('.nerse__card').toggleClass('nerse__cardShow')
    })
});



$(document).ready(function(){
    $("#diagnostic").click(function(e) {
        $('.diagcard').toggleClass('diagcardShow');
        $('.diag__name_hidden').toggleClass('diag__name');
    });

    $('#nerseCard').click(function(e){
        $('.nerse__card').toggleClass('nerse__cardShow')
    })

    $('#consult').click(function(e){
        $('.cons_none').toggleClass('cons_wrapper');
    })

    $('#offers').click(function(e){
        $('.offer_none ').toggleClass('spec_offers')
    })

    $('#partners').click(function(e){
        $('.part_none').toggleClass('partners')
    })
});


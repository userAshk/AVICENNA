
$(document).ready(function(){
    $("#diagnostic").click(function(e) {
        if($('.nerse__card').removeClass('nerse__cardShow'))
        if($('.cons_none').removeClass('cons_wrapper'))

        $('.diagcard').toggleClass('diagcardShow');
        $('.diag__name_hidden').toggleClass('diag__name');
    });

    $('#nerseCard').click(function(e){
        if($('.diagcard').removeClass('diagcardShow'))
        if($('.diag__name_hidden').removeClass('diag__name'))

        if($('.cons_none').removeClass('cons_wrapper'))

        $('.nerse__card').toggleClass('nerse__cardShow')
    })

    $('#consult').click(function(e){
        if($('.nerse__card').removeClass('nerse__cardShow'))
        if($('.diagcard').removeClass('diagcardShow'))
        if($('.diag__name_hidden').removeClass('diag__name'))
        
        $('.cons_none').toggleClass('cons_wrapper');
    })


    $('#offers').click(function(e){
        if($('.part_none').removeClass('partners'))
        if($('.cont_none').removeClass('contacts'))

        $('.offer_none ').toggleClass('spec_offers')
    })

    $('#partners').click(function(e){
        if($('.cont_none').removeClass('contacts'))
        if($('.offer_none ').removeClass('spec_offers'))

        $('.part_none').toggleClass('partners')
    })
    
    $('#contacts').click(function(e){
        if($('.part_none').removeClass('partners'))
        if($('.offer_none ').removeClass('spec_offers'))

        $('.cont_none').toggleClass('contacts')
    })
});

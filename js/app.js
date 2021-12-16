// BANNER SLIDER
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); 
}



$(document).ready(function(){

    //show diagnostic cards
    $("#diagnostic").click(function(e) {
        $('.diagcard').toggleClass('diagcardShow');
        $('.diag__name_hidden').toggleClass('diag__name');

        if($('.nerse__card').removeClass('nerse__cardShow'));
        if($('.cons_none').removeClass('cons_wrapper'));
        if($('.part_none').removeClass('partners'));
        if($('.cont_none').removeClass('contacts'));
        if($('.offer_none ').removeClass('spec_offers'));

    });

    $('#nerseCard').click(function(e){
        $('.nerse__card').toggleClass('nerse__cardShow');

        if($('.diagcard').removeClass('diagcardShow'))
        if($('.diag__name_hidden').removeClass('diag__name'))
        if($('.cons_none').removeClass('cons_wrapper'));
        if($('.part_none').removeClass('partners'));
        if($('.cont_none').removeClass('contacts'));
        if($('.offer_none ').removeClass('spec_offers'));

    })

    $('#consult').click(function(e){
        // CONSULTING
        $('.cons_none').toggleClass('cons_wrapper');

        if($('.diagcard').removeClass('diagcardShow'))
        if($('.diag__name_hidden').removeClass('diag__name'))
        if($('.part_none').removeClass('partners'));
        if($('.cont_none').removeClass('contacts'));
        if($('.offer_none ').removeClass('spec_offers'));
        if($('.nerse__card').removeClass('nerse__cardShow'));
    })


    $('#offers').click(function(e){
        $('.offer_none ').toggleClass('spec_offers')

        if($('.diagcard').removeClass('diagcardShow'))
        if($('.diag__name_hidden').removeClass('diag__name'))
        if($('.part_none').removeClass('partners'));
        if($('.cont_none').removeClass('contacts'));
        if($('.cons_none').removeClass('cons_wrapper'));
        if($('.nerse__card').removeClass('nerse__cardShow'));

    })

    $('#partners').click(function(e){
        $('.part_none').toggleClass('partners');

        if($('.diagcard').removeClass('diagcardShow'));
        if($('.diag__name_hidden').removeClass('diag__name'))
        if($('.cont_none').removeClass('contacts'));
        if($('.cons_none').removeClass('cons_wrapper'));
        if($('.offer_none ').removeClass('spec_offers'));
        if($('.nerse__card').removeClass('nerse__cardShow'));

    })
    
    $('#contacts').click(function(e){
        $('.cont_none').toggleClass('contacts');

        
        if($('.diagcard').removeClass('diagcardShow'));
        if($('.diag__name_hidden').removeClass('diag__name'))
        if($('.cons_none').removeClass('cons_wrapper'));
        if($('.offer_none ').removeClass('spec_offers'));
        if($('.part_none').removeClass('partners'));
        if($('.nerse__card').removeClass('nerse__cardShow'));
    })
});


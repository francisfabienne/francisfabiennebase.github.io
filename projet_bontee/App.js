$(document).on('click','[data-toggle="lightbox"]', function(event){
    event.preventDefault();
    $(this).ekkoLightbox();
})

// carousel de text

$('.carousel').carousel({
    interval: 2500,
    pause: 'null'
})

//navbar animation

$(window).scroll(function(){
    if($(this).scrollTop() > 30) {
        $('.navbar').addClass('opaque');
    }else {
        $('.navbar').removeClass('opaque');
    }
})

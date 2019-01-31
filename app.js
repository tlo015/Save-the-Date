$(document).ready(function(){
    
    $('.front').click(function() {
        $('.flipper').toggleClass('flipped');
        $('.flipper').promise().done(function() {
            $('.top').addClass('open');
            $('.card').addClass('pull');
        })
    })

});
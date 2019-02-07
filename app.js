$(document).ready(function(){
    $('.video').hide();
    
    $('.front').click(function() {
        $('.flipper').toggleClass('flipped');
        $('.flipper').promise().done(function() {
            $('.top').addClass('open');
            $('.card').addClass('pull');
        })
        setTimeout(
            function(){
                $('.video').show()
            }, 800)
    })
});

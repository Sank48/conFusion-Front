$(document).ready(function() {
    $('#mycarousel').carousel({interval: 2000});
    $(".close").click(function(){
        $('#loginModal').modal('hide');
        $('#reserve').modal('hide');
    });
    $('.navbar-text').click(function() {
        $('#loginModal').modal('show');
    });
    $('#reserveBtn').click(function () {
        $('#reserve').modal('show');
    });
    $('#cancelBtn').click(function(){
        $('#loginModal').modal('hide');
    });
    $('#cancelBtnForm').click(function () {
        $('#reserve').modal('hide');
    })
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});
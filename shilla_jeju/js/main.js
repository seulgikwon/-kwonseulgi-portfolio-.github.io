$('#main_nav ul').css({
    right:-$('#main_nav ul').width()
});
$('#main_nav').hide();
$('#nav_toggle').click(function(){
    $('#main_nav').fadeIn(500);
    $('#main_nav ul').animate({
        right:0
    },500);
});
$('#main_nav .close').click(function(){
    $('#main_nav').fadeOut(500);
    $('#main_nav ul').animate({
        right:-$('#main_nav ul').width()
    },500);
});


$(document).ready(function(){
    $('.main_slide').slick({
        dots: true,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.scroll').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            }
        ]
      });
  });


  var oldsct = 0; //이전 스크롤탑값 기억할 변수
  $(window).scroll(function(){
      var sct = $(window).scrollTop();
      //스크롤 방향에 따라 헤더 보이고 감추게
      if(sct > oldsct){ //스크롤을 내리면 감추고
          $('#main_header').addClass('up');
      }else{ //스크롤을 올리면 보이고
          $('#main_header').removeClass('up');
      }
      oldsct=sct;
  }); //---스크롤 이벤트 끝



//sub_scroll

    $('.ovimg, .ov_con').css({
        top:200,
        opacity:0
    });

    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        $('article').each(function(index,item){
            if($(item).offset().top - sct < 400){
                $(item).find('.ov_con').not('.on').delay(300).animate({
                    top:0,
                    opacity:1
                },1000).addClass('on');
                $(item).find('.ovimg').not('.on').animate({
                    top:0,
                    opacity:1
                },1000).addClass('on');
            }
        });
    });
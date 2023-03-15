
$(document).ready(function(){
    $('.sns_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
      });
});

$(function(){

  var now = 0; //현재 보고 있는 페이지
  var want; //보고자 하는 페이지
  var now_stop = true; //에니메이션이 멈춘 상태인지

  $(window).on('mousewheel',function(e){

      if(now_stop){ //에니메이션이 끝나야 실행
          if( e.originalEvent.deltaY > 0 ){ //마우스 휠을 내렸을 때
              if(now < 7){ //마지막 페이지가 아닌 경우
                  want = now + 1;
                  //현재 보고 있는 페이지를 위로 올림
                  now_stop = false;
                  $('section').eq(now).stop(true,true).animate({top:'-100%'},500);
                  $('section').eq(want).stop(true,true).animate({
                      top:0
                  }, 500, function(){
                      $('.content').removeClass('on');
                      $('section').eq(want).find('.content').addClass('on');
                      now = want;
                      now_stop = true;
                  });
              } // if(now < 4)
          } else { //마우스 휠을 올렸을 때
              if(now > 0){ //첫 페이지가 아닌 경우
                  want = now - 1;
                  //현재 보고 있는 페이지를 아래로 내림
                  now_stop = false;
                  $('section').eq(now).stop(true,true).animate({top:'100%'},500);
                  $('section').eq(want).stop(true,true).animate({
                      top:0
                  }, 500, function(){
                      $('.content').removeClass('on');
                      $('section').eq(want).find('.content').addClass('on');
                      now = want;
                      now_stop = true;
                  });
              } // if(now < 4)
          } // if(e.originalEvent.deltaY > 0) else
      } // if(now_stop)
  });
});
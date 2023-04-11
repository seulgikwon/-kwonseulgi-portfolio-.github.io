
$(document).ready(function(){
    $('.sns_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
      });


      $('.poster').each(function(){

        var anchor = $(this).find('#poster_wrap div a'); //전체에서 a를 찾기
        var anchor_on = $(this).find('#poster_wrap div a.on'); //찾은 a에서 .on찾기
        var on_href = anchor_on.attr('href');  //기본으로 .on을 붙여놓은 a의 href 값 찾기
        var allpanel = $(this).find('.poster_img div'); //전체 panel들 찾기

        //처음 열려있을 .on이 붙은 내용

        anchor.each(function(){  //각각의 a가 개별로 행동하게 할것이다.

            var href = $(this).attr('href');  // 선택한 a에게서 href 값 찾기
            
            $(this).click(function(){  //a를 클릭하면
                allpanel.hide();  //모든 panel을 닫아라
                anchor.removeClass('on');  //모든 a에게서.on을 빼라 
                $(this).addClass('on');  // 선택한 a에게 .on을 줘라
                $(href).show(); //찾은 href 값을 보여줘라
            });

        });
        

    }); //tab_set 끝
    //   $('#poster_btn1').click(function(){
    //     $('#poster1').css({
    //         opacity:1
    //     });
    //   });
    //   $('#poster_btn2').click(function(){
    //     $('#poster2').css({
    //         opacity:1
    //     });
    //   });
     
    //   banner jquery 



    $('.banner').each(function(){

        var anchor = $(this).find('#banner_btn div a'); //전체에서 a를 찾기
        var anchor_on = $(this).find('#banner_btn div a.on'); //찾은 a에서 .on찾기
        var on_href = anchor_on.attr('href');  //기본으로 .on을 붙여놓은 a의 href 값 찾기
        var allpanel = $(this).find('.banner_wrap div'); //전체 panel들 찾기

        //처음 열려있을 .on이 붙은 내용

        anchor.each(function(){  //각각의 a가 개별로 행동하게 할것이다.

            var href = $(this).attr('href');  // 선택한 a에게서 href 값 찾기
            
            $(this).click(function(){  //a를 클릭하면
                allpanel.hide();  //모든 panel을 닫아라
                anchor.removeClass('on');  //모든 a에게서.on을 빼라 
                $(this).addClass('on');  // 선택한 a에게 .on을 줘라
                $(href).show(); //찾은 href 값을 보여줘라
            });

        });
        

    }); //tab_set 끝


    //   $('#banner_btn > div:nth-child(1)').click(function(){
    //     $('#banner1').css({
    //         opacity:1
    //     });
    //     $('#banner8').css({
    //         opacity:0
    //     });
    //   });
    //   $('#banner_btn > div:nth-child(2)').click(function(){
    //     $('#banner2').css({
    //         opacity:1
    //     });
    //     $('#banner1').css({
    //         opacity:0
    //     });
    //   });
    //   $('#banner_btn > div:nth-child(3)').click(function(){
    //     $('#banner3').css({
    //         opacity:1
    //     });
    //     $('#banner2').css({
    //         opacity:0
    //     });
    //   });
    //   $('#banner_btn > div:nth-child(4)').click(function(){
    //     $('#banner4').css({
    //         opacity:1
    //     });
    //     $('#banner3').css({
    //         opacity:0
    //     });
    //   });
    //   $('#banner_btn > div:nth-child(5)').click(function(){
    //     $('#banner5').css({
    //         opacity:1
    //     });
    //     $('#banner4').css({
    //         opacity:0
    //     });
    //   });
    //   $('#banner_btn > div:nth-child(6)').click(function(){
    //     $('#banner6').css({
    //         opacity:1
    //     });
    //     $('#banner5').css({
    //         opacity:0
    //     });
    //   });
    //   $('#banner_btn > div:nth-child(7)').click(function(){
    //     $('#banner7').css({
    //         opacity:1
    //     });
    //     $('#banner6').css({
    //         opacity:0
    //     });
    //   });
    //   $('#banner_btn > div:nth-child(8)').click(function(){
    //     $('#banner8').css({
    //         opacity:1
    //     });
    //     $('#banner7').css({
    //         opacity:0
    //     });
    //   });

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




// main.js
console.log('jquery...');

// gnb
$(function(){
  // 마우스 오버시 메뉴 열림
  $('.depth1').mouseover(function(){
    // class추가되면 보임
    $('.depth2').addClass('show');
    $('.ex').addClass('show');
  });

  // 마우스가 나가면 메뉴 닫힘
  $('.depth1 > li').mouseout(function(){
    $('.depth2').removeClass('show');
    $('.ex').removeClass('show');
  });

});

// popup
$(function(){
  $('.p1').addClass('show');

  // 닫기버튼클릭시 팝업창 종료
  $('#btn_close1').click(function(){
      $('.p1').removeClass('show');
  });


  $('.p2').addClass('show');

  // 닫기버튼클릭시 팝업창 종료
  $('#btn_close2').click(function(){
      $('.p2').removeClass('show');
  });

  
  $('.p3').addClass('show');

  // 닫기버튼클릭시 팝업창 종료
  $('#btn_close3').click(function(){
      $('.p3').removeClass('show');
  });
});
$(function(){
    //팝업창 표시(기본)
    $('.pop1').addClass('show');

    //닫기 버튼 클릭시 팝업창 종료 
    $('#btn_close1').click(function(){
        $('.pop1').removeClass('show');
    })



    $('.pop2').addClass('show');

    //닫기 버튼 클릭시 팝업창 종료 
    $('#btn_close2').click(function(){
        $('.pop2').removeClass('show');
    })



    $('.pop3').addClass('show');

    //닫기 버튼 클릭시 팝업창 종료 
    $('#btn_close3').click(function(){
        $('.pop3').removeClass('show');
    })
});
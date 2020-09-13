$(function(){
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);
  });

  $(".btn-gnavi").on("click", function(){
    // ハンバーガーメニューの位置を設定
    var rightVal = 0;
    if($(this).hasClass("open")) {
        // 位置を移動させメニューを開いた状態にする
        rightVal = -300;
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $(this).removeClass("open");
    } else {
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $(this).addClass("open");
    }

    $("#global-navi").stop().animate({
        right: rightVal
    }, 200);
});
})
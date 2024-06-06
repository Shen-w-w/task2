$('.navbar-btn').click(function() {
    //利用active切換btn顯示狀態
    $('.navbar-btn').toggleClass('active');
    //利用close讓圖示消失
    $('.open').toggleClass('close');
      //利用close讓圖示消失
    $('.closure').toggleClass('close');
      //利用active切換list顯示狀態
    $('.list').toggleClass('active');
  })
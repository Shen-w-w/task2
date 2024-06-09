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


//swiper套件

  const swiper = new Swiper(".swiper", {
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grid: {
      rows: 3,
    },
    breakpoints: {
      768: {      
        grid: {
          rows: 1,
        },
        slidesPerView: 3,
        spaceBetween: 24,
      }
    }
  });
  
  
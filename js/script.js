$(document).ready(function () {
  // Swiper 초기화
  var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 무한 루프
    autoplay: {
      delay: 3000,           // 3초마다 자동 슬라이드
      disableOnInteraction: false, 
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // 효과, 속도 등 더 많은 옵션 가능
    // effect: 'fade',
    // speed: 800,
  });

  // 다른 jQuery 이벤트 예시 (원하는 경우)
  // $("#prevBtn").on("click", function(){
  //   mySwiper.slidePrev();
  // });
  // $("#nextBtn").on("click", function(){
  //   mySwiper.slideNext();
  // });
});

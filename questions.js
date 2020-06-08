//Swiper 기능 뼈대
var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




//진행 50% 이상 시 색 변경
const question = document.getElementsByClassName("questions");
const progressbarColor = document.getElementsByClassName(
  "swiper - pagination - progressbar - fill"
);

if (id > 14) {
  progressbarColor.style.background("#68a882");
}


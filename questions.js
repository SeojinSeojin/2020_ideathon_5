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
const question = document.getElementByClassName("questions");
const progressbarColor = document.getElementsByClassName(
  "swiper - pagination - progressbar - fill"
);
//문항 넘버를 문자열로 인식하게 해서 십의자리수가 2이면 색 변경
if (question.length > 1 && question[0] === "2") {
  progressbarColor.style.background("#68a882");
}

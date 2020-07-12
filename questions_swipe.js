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

//진행 50% 이상 시 색 변경하는 코드
const progressbar = document.getElementsByClassName(
  "swiper-pagination-progressbar-fill"
)[0];

const swiperBtnN = document.getElementsByClassName("swiper-button-next")[0];
const swiperBtnP = document.getElementsByClassName("swiper-button-prev")[0];

const changeBarColor = () => {
  const question = document.getElementsByClassName("swiper-slide-active")[0]
    .childNodes[1].innerText;
  const questionID = question.split(".")[0];
  if (questionID > 14) {
    progressbar.style.background = "#68a882";
    swiperBtnN.style.color = "#68a882";
    swiperBtnP.style.color = "#68a882";
  } else {
    progressbar.style.background = "#ec995c";
    swiperBtnN.style.color = "#ec995c";
    swiperBtnP.style.color = "#ec995c";
  }
};

swiperBtnN.onclick = changeBarColor;
swiperBtnP.onclick = changeBarColor;

//btn 클릭 시 다음 슬라이드로 넘어가는 코드
const answerBtn = document.querySelectorAll("input[type=radio]");
answerBtn.onclick = swiper.slideNext();

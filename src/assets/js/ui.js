/* 전체화면 */
/* const toggleFullscreenBtn = document.querySelector("#btn-fullscreen");

const container = document.querySelector("#wrap");

toggleFullscreenBtn.addEventListener("click", (e) => {
  toggleFullScreen(container);
});
function toggleFullScreen(element) {
  if (!document.fullscreenElement) {
    if (element.requestFullscreen) return element.requestFullscreen();
    if (element.webkitRequestFullscreen) return element.webkitRequestFullscreen();
    if (element.mozRequestFullScreen) return element.mozRequestFullScreen();
    if (element.msRequestFullscreen) return element.msRequestFullscreen();
  } else {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.webkitCancelFullscreen) return document.webkitCancelFullscreen();
    if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
    if (document.msExitFullscreen) return document.msExitFullscreen();
  }
}
 */
const html = document.querySelector("html");
let previousPanel = "";
let isPanel = "";
let isPanelName = "";

// Aside Open Buttons
const asideOpenBtns = document.querySelectorAll("[data-aside]");
asideOpenBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const target = this.getAttribute("data-aside");
    isPanelName = "is-" + target;
    html.removeAttribute("class"); //이전에 열려있는 panel hide
    html.classList.add(isPanelName); //html에 클래스를 추가하여 오른쪽 panel show
    if (previousPanel === "") {
      previousPanel = isPanelName;
    } else {
      previousPanel = isPanel; //이전 panel 저장
    }
    isPanel = isPanelName; //현재 panel 저장
    console.log("prev : " + previousPanel + " / is : " + isPanel);
  });
});

// Aside Clsoe
const asideCloseBtn = document.querySelector(".btn-right-close");
asideCloseBtn.addEventListener("click", function () {
  html.removeAttribute("class"); //열려있는 panel hide
});

// Aside Back Button
const backBtns = document.querySelectorAll(".btn-back");
backBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    html.removeAttribute("class");
    html.classList.add(previousPanel);
    isPanel = previousPanel;
    previousPanel = isPanelName;
    console.log("prev : " + previousPanel + " / is : " + isPanel);
  });
});

//multiple selection checkbox
const cards = document.querySelectorAll(".group-list .card");
const multiSelCheck = document.querySelector("#multipleCheck");
multiSelCheck.addEventListener("change", function () {
  cards.forEach((card) => {
    card.classList.remove("selected");
  });
  if (this.checked) {
    document.querySelector(".group-list").classList.add("selectable");
  } else {
    document.querySelector(".group-list").classList.remove("selectable");
  }
});
// card - selection
cards.forEach((card) => {
  card.addEventListener("click", function () {
    const selectedCard = this;
    let selectedCards = document.querySelectorAll(".group-list .selected");
    //multi
    if (document.querySelector(".group-list").classList.contains("selectable")) {
      selectedCard.classList.toggle("selected");
      selectedCards = document.querySelectorAll(".group-list .selected");
      // 선택된 카드 갯수
      document.querySelector(".selected-item-length .length").innerHTML = selectedCards.length;
      // 카드가 1개라도 선택되면 상단에 레이어 bar 노출
      if (selectedCards.length > 0) {
        document.querySelector(".top-bar").classList.add("show");
      } else {
        document.querySelector(".top-bar").classList.remove("show");
      }
    }
    //single
    else {
      selectedCard.classList.toggle("selected");
      selectedCards.forEach((card) => {
        card.classList.remove("selected");
      });
    }
  });
});
//top bar close button
document.querySelector(".btn-top-bar-close").addEventListener("click", function () {
  document.querySelector(".top-bar").classList.remove("show");
  cards.forEach((card) => {
    card.classList.remove("selected");
  });
  multiSelCheck.checked = false;
  document.querySelector(".group-list").classList.remove("selectable");
});

$("[data-picker='date']").datepicker();

/* card - favorite 토글 */
const favoriteBtns = document.querySelectorAll(".btn-favorites");
favoriteBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("즐겨찾기 해제 & 아이콘 hide");
    this.classList.toggle("active");
    this.remove();
  });
});

/* card - 발언 토글 */
/* const speakingBtns = document.querySelectorAll(".btn-call-speaking button");
speakingBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}); */
const pttBtn = document.querySelector(".btn-ptt");
pttBtn.addEventListener("click", function () {
  this.classList.toggle("active");
});

/* card - 종료 */
const callEndBtns = document.querySelectorAll(".btn-call-end button");
callEndBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("종료 버튼 clicked");
  });
});

/* card - 가로채기 토글 */
const interceptionBtns = document.querySelectorAll(".btn-call-interception button");
interceptionBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("active");
  });
});

/* card - 메뉴 */
const cardMenuBtns = document.querySelectorAll(".btn-card-menu");
cardMenuBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("카드 메뉴 버튼 clicked");
  });
});

/* 검색 input 활성화 */
const searchBtns = document.querySelectorAll(".search-form");
searchBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(1);
    this.classList.add("show");
    this.querySelector(".form-control").focus();
  });
});

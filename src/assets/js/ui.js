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
    document.querySelector(".btn-menu").classList.remove("active"); //메뉴레이어 hide
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

// option more button
const moreOptions = document.querySelectorAll(".btn-option-more");
moreOptions.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.add("active");
  });
});
document.addEventListener("mouseup", function (e) {
  let target = e.target;
  let groupInfo = target.closest(".group-info");
  if (!groupInfo) {
    moreOptions.forEach((btn) => {
      btn.classList.remove("active");
    });
  }
});

//multiple selection checkbox
const multiSelCheck = document.querySelector("#multipleCheck");
multiSelCheck.addEventListener("change", function () {
  let disabledBtns = document.querySelectorAll(".multiple-function");
  if (this.checked) {
    document.querySelector(".group-list").classList.add("selectable");
    disabledBtns.forEach((btn) => {
      btn.disabled = false;
    });
  } else {
    document.querySelector(".group-list").classList.remove("selectable");
    disabledBtns.forEach((btn) => {
      btn.disabled = true;
    });
    let cards = document.querySelectorAll(".group-list .card");
    cards.forEach((card) => {
      card.classList.remove("selected");
    });
  }
});
// card - selection
const cards = document.querySelectorAll(".group-list .card");
cards.forEach((card) => {
  card.addEventListener("click", function () {
    const selectedCard = this;
    if (document.querySelector(".group-list").classList.contains("selectable")) {
      selectedCard.classList.toggle("selected");
    } else {
      cards.forEach((card) => {
        card.classList.remove("selected");
      });
      selectedCard.classList.add("selected");
    }
  });
});

$("[data-picker='date']").datepicker();

/* card - favorite 토글 */
const favoriteBtns = document.querySelectorAll(".btn-favorites");
favoriteBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

/* card - 발언 토글 */
const speakingBtns = document.querySelectorAll(".btn-call-speaking button");
speakingBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
const pttBtn = document.querySelector(".btn-ptt");
pttBtn.addEventListener("click", function () {
  this.classList.toggle("active");
});

/* card - 가로채기 토글 */
const interceptionBtns = document.querySelectorAll(".btn-call-interception button");
interceptionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

/* card - 메뉴 */
const cardMenuBtns = document.querySelectorAll(".btn-card-menu");
cardMenuBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const myCard = this.closest(".card");
    myCard.querySelector(".card-menu-list").classList.toggle("active");
  });
});
const cardMenuCLoseBtns = document.querySelectorAll(".btn-card-menu-close");
cardMenuCLoseBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.closest(".card-menu-list").classList.remove("active");
  });
});

/* card - 사운드 toggle */
const soundBtns = document.querySelectorAll(".sound button");
soundBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("off");
  });
});

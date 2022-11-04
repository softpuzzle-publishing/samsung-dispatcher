"use strict";

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
var html = document.querySelector("html");
var previousPanel = "";
var isPanel = "";
var isPanelName = ""; // Aside Open Buttons

var asideOpenBtns = document.querySelectorAll("[data-aside]");
asideOpenBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var target = this.getAttribute("data-aside");
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
}); // Aside Clsoe

var asideCloseBtn = document.querySelector(".btn-right-close");
asideCloseBtn.addEventListener("click", function () {
  html.removeAttribute("class"); //열려있는 panel hide
}); // Aside Back Button

var backBtns = document.querySelectorAll(".btn-back");
backBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    html.removeAttribute("class");
    html.classList.add(previousPanel);
    isPanel = previousPanel;
    previousPanel = isPanelName;
    console.log("prev : " + previousPanel + " / is : " + isPanel);
  });
}); // option more button

var moreOptions = document.querySelectorAll(".btn-option-more");
moreOptions.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.classList.add("active");
  });
});
document.addEventListener("mouseup", function (e) {
  var target = e.target;
  var groupInfo = target.closest(".group-info");

  if (!groupInfo) {
    moreOptions.forEach(function (btn) {
      btn.classList.remove("active");
    });
  }
}); //multiple selection checkbox

var multiSelCheck = document.querySelector("#multipleCheck");
multiSelCheck.addEventListener("change", function () {
  var disabledBtns = document.querySelectorAll(".multiple-function");

  if (this.checked) {
    document.querySelector(".group-list").classList.add("selectable");
    disabledBtns.forEach(function (btn) {
      btn.disabled = false;
    });
  } else {
    document.querySelector(".group-list").classList.remove("selectable");
    disabledBtns.forEach(function (btn) {
      btn.disabled = true;
    });

    var _cards = document.querySelectorAll(".group-list .card");

    _cards.forEach(function (card) {
      card.classList.remove("selected");
    });
  }
}); // card - selection

var cards = document.querySelectorAll(".group-list .card");
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    var selectedCard = this;

    if (document.querySelector(".group-list").classList.contains("selectable")) {
      selectedCard.classList.toggle("selected");
    } else {
      cards.forEach(function (card) {
        card.classList.remove("selected");
      });
      selectedCard.classList.add("selected");
    }
  });
});
$("[data-picker='date']").datepicker();
/* card - favorite 토글 */

var favoriteBtns = document.querySelectorAll(".btn-favorites");
favoriteBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
/* card - 발언 토글 */

var speakingBtns = document.querySelectorAll(".btn-call-speaking button");
speakingBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
var pttBtn = document.querySelector(".btn-ptt");
pttBtn.addEventListener("click", function () {
  this.classList.toggle("active");
});
/* card - 가로채기 토글 */

var interceptionBtns = document.querySelectorAll(".btn-call-interception button");
interceptionBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
/* card - 메뉴 */

var cardMenuBtns = document.querySelectorAll(".btn-card-menu");
cardMenuBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var myCard = this.closest(".card");
    myCard.querySelector(".card-menu-list").classList.toggle("active");
  });
});
var cardMenuCLoseBtns = document.querySelectorAll(".btn-card-menu-close");
cardMenuCLoseBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.closest(".card-menu-list").classList.remove("active");
  });
});
/* card - 사운드 toggle */

var soundBtns = document.querySelectorAll(".sound button");
soundBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.classList.toggle("off");
  });
});
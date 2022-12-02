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

/* My Profile */
var myProfileBtn = document.querySelector(".btn-profile");
if (myProfileBtn != undefined) {
  myProfileBtn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
  document.addEventListener("mouseup", function (e) {
    var target = e.target;
    var myMenu = target.closest(".my-menu");
    if (!myMenu) {
      myProfileBtn.classList.remove("active");
    }
  });
}
var myMenuBtns = document.querySelectorAll(".my-menu a");
myMenuBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    setTimeout(function () {
      myProfileBtn.classList.remove("active");
    }, 10);
  });
});
var html = document.querySelector("html");
var previousPanel = "";
var isPanel = "";
var isPanelName = "";

// Aside Open Buttons
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
    console.log("prev : " + previousPanel + " / is : " + isPanel);
  });
});

// Aside Clsoe
var asideCloseBtn = document.querySelector(".btn-right-close");
if (asideCloseBtn != undefined) {
  asideCloseBtn.addEventListener("click", function () {
    html.removeAttribute("class"); //열려있는 panel hide
  });
}

// Aside Back Button
var backBtns = document.querySelectorAll(".btn-back");
backBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    html.removeAttribute("class");
    html.classList.add(previousPanel);
    isPanel = previousPanel;
    previousPanel = isPanelName;
    console.log("prev : " + previousPanel + " / is : " + isPanel);
  });
});

//multiple selection checkbox
var cards = document.querySelectorAll(".group-list .card");
var multiSelCheck = document.querySelector("#multipleCheck");
if (multiSelCheck != undefined) {
  multiSelCheck.addEventListener("change", function () {
    cards.forEach(function (card) {
      card.classList.remove("selected");
    });
    if (this.checked) {
      document.querySelector(".group-list").classList.add("selectable");
    } else {
      document.querySelector(".group-list").classList.remove("selectable");
    }
  });
}
// card - selection
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    var selectedCard = this;
    var selectedCards = document.querySelectorAll(".group-list .selected");
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
      selectedCards.forEach(function (card) {
        card.classList.remove("selected");
      });
    }
  });
});
//top bar close button
var tobBarCloseBtn = document.querySelector(".btn-top-bar-close");
if (tobBarCloseBtn != undefined) {
  tobBarCloseBtn.addEventListener("click", function () {
    document.querySelector(".top-bar").classList.remove("show");
    cards.forEach(function (card) {
      card.classList.remove("selected");
    });
    multiSelCheck.checked = false;
    document.querySelector(".group-list").classList.remove("selectable");
  });
}
$("[data-picker='date']").datepicker();

/* card - favorite 토글 */
var favoriteBtns = document.querySelectorAll(".btn-favorites");
favoriteBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    this.classList.toggle("active");
    if (this.parentElement.classList.contains("card-header")) {
      e.stopPropagation();
      console.log("즐겨찾기 해제 & 아이콘 hide");
      this.remove();
    }
  });
});

/* card - 발언 토글 */
/* const speakingBtns = document.querySelectorAll(".btn-call-speaking button");
speakingBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}); */
var pttBtn = document.querySelector(".btn-ptt");
if (pttBtn != undefined) {
  pttBtn.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

/* card - 종료 */
var callEndBtns = document.querySelectorAll(".btn-call-end button");
callEndBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("종료 버튼 clicked");
  });
});

/* card - 가로채기 토글 */
var interceptionBtns = document.querySelectorAll(".btn-call-interception button");
interceptionBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("active");
  });
});

/* card - 메뉴 */
var cardMenuBtns = document.querySelectorAll(".btn-card-menu");
cardMenuBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("카드 메뉴 버튼 clicked");
  });
});

/* 검색 input 활성화 */
var searchBtns = document.querySelectorAll(".search-form");
searchBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.classList.add("show");
    this.querySelector(".form-control").focus();
  });
});

//input focused
var inputAll = document.querySelectorAll(".form-control");
inputAll.forEach(function (input) {
  input.addEventListener("focus", function () {
    this.classList.add("filled");
  });
  input.addEventListener("focusout", function () {
    setTimeout(function () {
      input.classList.remove("filled");
    }, 100);
  });
});

//input value clear
var btnClear = document.querySelectorAll(".btn-input-x");
btnClear.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.previousElementSibling.value = "";
    btn.previousElementSibling.classList.remove("filled");
    btn.previousElementSibling.previousElementSibling.value = "";
    btn.previousElementSibling.previousElementSibling.classList.remove("filled");
  });
});

//input type(password) toggle
var btnTypeToggle = document.querySelectorAll(".btn-type-toggle");
btnTypeToggle.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.previousElementSibling.getAttribute("type") === "password") {
      btn.previousElementSibling.type = "text";
    } else {
      btn.previousElementSibling.type = "password";
    }
  });
});

//input range
var rangeInput = document.querySelectorAll(".range input");
rangeInput.forEach(function (btn) {
  btn.addEventListener("input", function () {
    var v = this.value;
    this.closest(".range-wrap").querySelector(".range-value").innerHTML = v;
    this.nextElementSibling.style.width = v + "%";
  });
});

// Left Clsoe
var leftCloseBtn = document.querySelector(".btn-left-close");
if (leftCloseBtn != undefined) {
  leftCloseBtn.addEventListener("click", function () {
    html.classList.toggle("is-gis"); //열려있는 panel hide
  });
}
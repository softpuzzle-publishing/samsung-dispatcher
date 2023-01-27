"use strict";

/* My Profile */
var myProfileBtn = document.querySelector(".btn-profile");
if (myProfileBtn != undefined) {
  myProfileBtn.addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
  });
  document.addEventListener("mouseup", function (e) {
    var target = e.target;
    var myMenu = target.closest(".header-profile");
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
    if (html.className.includes(target)) {
      console.log("포함");
      html.removeAttribute("class");
    } else {
      console.log("미포함");
      html.removeAttribute("class"); //이전에 열려있는 panel hide
      html.classList.add(isPanelName); //html에 클래스를 추가하여 오른쪽 panel show
      if (previousPanel === "") {
        previousPanel = isPanelName;
      } else {
        previousPanel = isPanel; //이전 panel 저장
      }

      isPanel = isPanelName; //현재 panel 저장
      //console.log("prev : " + previousPanel + " / is : " + isPanel);
    }
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
      //Main Channel 즉시 변경 & 채널 정보 창 변경
      selectedCards.forEach(function (card) {
        card.classList.remove("selected");
      });
      selectedCard.classList.add("selected");
      //대기 상태일때 모달 띄우기
      if (this.getAttribute("data-state") == "standby") {
        var myModal = new bootstrap.Modal(document.getElementById("modal-card-menu")); // eslint-disable-line
        myModal.show();
      }
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
    if (this.parentElement.classList.contains("status-aside")) {
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
    this.setAttribute("data-state", "communication");
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
//검색창 확장
var searchBtns = document.querySelectorAll(".search-form");
searchBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.classList.add("show");
    this.querySelector(".form-control").focus();
  });
});
//검색창 축소
var searchCloseBtns = document.querySelectorAll(".btn-search-close");
searchCloseBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    var thisSearch = this.closest(".search-form");
    thisSearch.classList.remove("show");
    thisSearch.querySelector(".form-control").value = "";
  });
});
//검색창 검색어 삭제
var searchDeleteBtns = document.querySelectorAll(".search-delete");
searchDeleteBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.closest(".search-form").querySelector(".form-control").value = "";
  });
});

//input 삭제 버튼 노출
var inputAll = document.querySelectorAll(".form-control");
inputAll.forEach(function (input) {
  input.addEventListener("focus", function () {
    if (this.value.length > 0) {
      this.classList.add("filled");
    } else {
      this.classList.remove("filled");
    }
    input.addEventListener("keyup", function () {
      if (this.value.length > 0) {
        this.classList.add("filled");
      } else {
        this.classList.remove("filled");
      }
    });
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
    this.previousElementSibling.value = "";
    this.previousElementSibling.classList.remove("filled");
    this.previousElementSibling.previousElementSibling.value = "";
    this.previousElementSibling.previousElementSibling.classList.remove("filled");
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

//Left Clsoe
var leftCloseBtn = document.querySelector(".btn-left-close");
if (leftCloseBtn != undefined) {
  leftCloseBtn.addEventListener("click", function () {
    html.classList.toggle("is-gis"); //열려있는 panel hide
  });
}

//Card Sort Modal
var sortBtn = document.querySelector(".btn-sort");
sortBtn.addEventListener("click", function () {
  this.nextElementSibling.classList.add("show");
});

//Relative Modal Close
var relativeModalCloseBtns = document.querySelectorAll(".modal-relative [data-bs-dismiss='modal']");
relativeModalCloseBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    this.closest(".modal-relative").classList.remove("show");
  });
});

//Message Input
var messageInput = document.querySelector(".message-input .form-control");
var messageSendBtn = document.querySelector(".message-input-btn");
messageInput.addEventListener("focus", function () {
  messageInput.addEventListener("keyup", function () {
    if (this.value.length > 0) {
      messageSendBtn.disabled = false;
    } else {
      messageSendBtn.disabled = true;
    }
  });
});
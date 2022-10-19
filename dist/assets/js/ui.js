"use strict";

var html = document.querySelector("html"); // Groups > option more button

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
}); // Aside Open Buttons

var asideOpenBtns = document.querySelectorAll("[data-aside]");
asideOpenBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var target = this.getAttribute("data-aside");
    html.removeAttribute("class");
    html.classList.add("is-" + target);
    document.querySelector(".btn-menu").classList.remove("active");
  });
}); // Aside Clsoe

var asideCloseBtn = document.querySelector(".btn-right-close");
asideCloseBtn.addEventListener("click", function () {
  html.removeAttribute("class");
});
$(document).ready(function () {
  //    group 상세 접기
  $(".detail-back").click(function () {
    // 임시
    $(".container-map").hide();
    $("#aside-group").show();
    $("#aside-group-detail").hide();
  });
  $("[data-picker='date']").datepicker();
});
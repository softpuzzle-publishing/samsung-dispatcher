const html = document.querySelector("html");

// Groups > option more button
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

// Aside Open Buttons
const asideOpenBtns = document.querySelectorAll("[data-aside]");
asideOpenBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const target = this.getAttribute("data-aside");
    html.removeAttribute("class");
    html.classList.add("is-" + target);
    document.querySelector(".btn-menu").classList.remove("active");
  });
});

// Aside Clsoe
const asideCloseBtn = document.querySelector(".btn-right-close");
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

"use strict";

$(document).ready(function () {
  //  group 오픈
  $(".open-group").click(function () {
    $("html").removeAttr("class");
    $("html").addClass("open-aside-group");
    $(".btn-menu").removeClass("active");
  }); //  group 상세 오픈

  $(".open-group-detail").click(function () {
    $("html").removeAttr("class");
    $("html").addClass("open-aside-group-detail");
  }); //  message 상세 오픈

  $(".open-message-detail").click(function () {
    // 임시
    $(".container-map").hide();
    $(".content-right").hide();
    $("#aside-message-detail").show();
  }); //  contacts 오픈

  $(".open-contacts").click(function () {
    $("html").removeAttr("class");
    $("html").addClass("open-aside-contacts");
  }); //  message 오픈

  $(".open-message").click(function () {
    $(".container-map").hide();
    $(".content-right").hide();
    $("#aside-message").show();
  }); //   content-right 접기

  $(".right-fold-btn").click(function () {
    $("html").removeAttr("class");
  }); //    group 상세 접기

  $(".detail-back").click(function () {
    // 임시
    $(".container-map").hide();
    $("#aside-group").show();
    $("#aside-group-detail").hide();
  });
  $("#datepicker-as").datepicker();
  $("#datepicker-is").datepicker(); //   container-map은 나중에 다 빼기
});
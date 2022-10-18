$(document).ready(function () {
  //  group 오픈
  $(".open-group").click(function () {
    $(".container-map").hide();
    $(".btn-menu").removeClass("active");
    $(".content-right").hide();
    $("#aside-group").show();
  });

  //  group 상세 오픈
  $(".open-group-detail").click(function () {
    // 임시
    $(".container-map").hide();

    $(".content-right").hide();
    $("#aside-group-detail").show();
  });
  //  contacts 오픈
  $(".open-contacts").click(function () {
    $(".container-map").hide();

    $(".content-right").hide();
    $("#aside-contacts").show();
  });

  //   content-right 접기
  $(".fold-btn").click(function () {
    // 임시
    $(".container-map").hide();
    $(".content-right").hide();
  });

  //    group 상세 접기
  $(".detail-back").click(function () {
    // 임시
    $(".container-map").hide();
    $("#aside-group").show();
    $("#aside-group-detail").hide();
  });

  $("#datepicker-as").datepicker();
  $("#datepicker-is").datepicker();

  //   container-map은 나중에 다 빼기
});

function showAboutUs() {
  document.getElementById("AboutLink").classList.add("active");
  document.getElementById("HomeLink").classList.remove("active");
  document.getElementById("ProductsLink").classList.remove("active");
  document.getElementById("ServicesLink").classList.remove("active");
  document.getElementById("AboutUs").style.display = "block";
  document.getElementById("Home").style.display = "none";
  document.getElementById("Products").style.display = "none";
  document.getElementById("Services").style.display = "none";
  $("html, body").animate({ scrollTop: 0 }, "fast");
}
function showHome() {
  document.getElementById("AboutLink").classList.remove("active");
  document.getElementById("HomeLink").classList.add("active");
  document.getElementById("ProductsLink").classList.remove("active");
  document.getElementById("ServicesLink").classList.remove("active");
  document.getElementById("AboutUs").style.display = "none";
  if ($(document).width() > 700)
    document.getElementById("Home").style.display = "flex";
  else document.getElementById("Home").style.display = "block";
  document.getElementById("Products").style.display = "none";
  document.getElementById("Services").style.display = "none";
  $("html, body").animate({ scrollTop: 0 }, "fast");
}
function showServices() {
  document.getElementById("AboutLink").classList.remove("active");
  document.getElementById("HomeLink").classList.remove("active");
  document.getElementById("ProductsLink").classList.remove("active");
  document.getElementById("ServicesLink").classList.add("active");
  document.getElementById("AboutUs").style.display = "none";
  document.getElementById("Home").style.display = "none";
  document.getElementById("Products").style.display = "none";
  document.getElementById("Services").style.display = "block";
  $("html, body").animate({ scrollTop: 0 }, "fast");
}
function showProducts() {
  document.getElementById("AboutLink").classList.remove("active");
  document.getElementById("HomeLink").classList.remove("active");
  document.getElementById("ProductsLink").classList.add("active");
  document.getElementById("ServicesLink").classList.remove("active");
  document.getElementById("AboutUs").style.display = "none";
  document.getElementById("Home").style.display = "none";
  document.getElementById("Products").style.display = "block";
  document.getElementById("Services").style.display = "none";
  $("html, body").animate({ scrollTop: 0 }, "fast");
}
document.querySelector(".MainMenu").style.display = "none";
function ToggleMenuDisplay() {
  document.querySelector("#nav-toggle").classList.toggle("active");

  let MenuDisplay = document.querySelector(".MainMenu").style.display;

  if (MenuDisplay === "none") {
    //document.querySelector(".TmtLogo").style.display = "none";
    $(".MainMenu").show("slide", { direction: "left" }, 100);
    //$(".headerBackground").slideDown("fast");
  } else {
    $(".MainMenu").hide("slide", { direction: "left" }, 100);
    //$(".headerBackground").slideUp("fast");
    //document.querySelector(".TmtLogo").style.display = "block";
  }
}

$(document).ready(function () {
  $("#HMBGHomeLink").click(function (event) {
    showHome();
    ToggleMenuDisplay();
  });
});
$(document).ready(function () {
  $("#HMBGAboutLink").click(function (event) {
    showAboutUs();
    ToggleMenuDisplay();
  });
});
$(document).ready(function () {
  $("#HMBGProductsLink").click(function (event) {
    showProducts();
    ToggleMenuDisplay();
  });
});
$(document).ready(function () {
  $("#HMBGServicesLink").click(function (event) {
    showServices();
    ToggleMenuDisplay();
  });
});
$(document).ready(function () {
  $(".OrderNowBtn").click(function (event) {
    showServices();
  });
});
$(document).ready(function () {
  $("#HamburgerMenu").click(function (event) {
    ToggleMenuDisplay();
  });
});
$(document).ready(function () {
  $("#AboutLink").click(function (event) {
    showAboutUs();
  });
});

$(document).ready(function () {
  $("#HomeLink").click(function (event) {
    showHome();
  });
});

$(document).ready(function () {
  $("#ServicesLink").click(function (event) {
    showServices();
  });
});

$(document).ready(function () {
  $("#ProductsLink").click(function (event) {
    showProducts();
  });
});

$(window).scroll(function () {
  if ($(window).width() > 1000) {
    if ($(window).scrollTop() > 200) {
      $(".headerBackground").slideDown("fast");
      $(".TmtLogo").attr("src", "images/TmtLogo.svg");
    } else {
      $(".headerBackground").slideUp("fast");
      $(".TmtLogo").attr("src", "images/TmtLogo2.png");
    }
  }
});

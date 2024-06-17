$(document).ready(function () {
  // Show the first section by default
  $("#1").show();

  // Handle click events for all navigation links
  $("nav ul li a").click(function () {
    // Remove 'active' class from all links
    $("nav ul li a").removeClass("active");

    // Add 'active' class to the clicked link
    $(this).addClass("active");

    // Hide all sections
    $(".retrun").hide();

    // Get the target section ID from the href attribute
    var target = $(this).attr("href");

    // Show the target section
    $(target).show();

    // Close the menu on mobile after clicking a link
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    // Smooth scroll to the target section
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - $("header").outerHeight(),
      },
      500
    );
  });

  // Toggle menu icon and header on mobile
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  // Close menu and header when scrolling on mobile
  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");
  });

  // Smooth scroll for anchor links
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - $("header").outerHeight(),
      },
      500
    );
  });
});

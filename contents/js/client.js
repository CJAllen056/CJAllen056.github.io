$(start);

function start() {
  $(".listing-link").mouseenter(function() {
    var linkClass = $(this).attr("class").substring(26);

    $(".listing-image-" + linkClass).css("display", "none");
    $(".listing-details-" + linkClass).css("display", "inline-block");
  }).mouseleave(function() {
    var linkClass = $(this).attr("class").substring(26);

    $(".listing-details-" + linkClass).css("display", "none");
    $(".listing-image-" + linkClass).css("display", "inline-block");
  });
}

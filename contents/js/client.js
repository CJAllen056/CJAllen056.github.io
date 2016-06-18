$(start);

function start() {
  $(".listing-link").mouseenter(function() {
    console.log($(this).attr("class"));
    $(".listing-image").css("display", "none");
    $(".listing-details").css("display", "inline-block");
  }).mouseleave(function() {
    $(".listing-details").css("display", "none");
    $(".listing-image").css("display", "inline-block");
  });
}

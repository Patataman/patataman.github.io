
function offsetNav() {
    var navbar = document.getElementById("navbar");
    var offset = navbar.offsetHeight;
    return offset;
}

/* ====== SCROLL ANYWHERE ====== */
function scrollToIt(section) {
    var sectionHeight = $(section.toString()).offset().top;
    var offset = 84;

    var distance = sectionHeight - offset / 5;

    $(window).scrollTop(distance);
}

// Cambiar border talks / papers
function changeHighlightColor() {
    // Talk por defecto está activado
    var talk_active = document.getElementById("talk-content").classList.contains("active");
    var paper_active = document.getElementById("paper-content").classList.contains("active");
    var target_id = $(this).attr("id");

    if (
      (target_id == "talk-pill" && paper_active) ||
      (target_id == "paper-pill" && talk_active))
        $("#talk-pill, #paper-pill").toggleClass("border-info");
}


$(document).ready(function() {
    $("#year").html(new Date().getFullYear());

    $("#talk-pill, #paper-pill").on("click", changeHighlightColor);
});


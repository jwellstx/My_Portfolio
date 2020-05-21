$(".home").on("click", () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".banner").offset().top - 60
    }, 2000);
})

$(".aboutMe1").on("click", () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#aboutMeSection").offset().top - 60
    }, 2000);
})

$(".portfolio1").on("click", () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#portfolioSectionP1").offset().top - 60
    }, 2000);
})

$(".portfolio2").on("click", () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#portfolioSectionP2").offset().top - 60
    }, 2000);
})

$(".portfolio3").on("click", () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#portfolioSectionP3").offset().top - 60
    }, 2000);
})

$(".contactMe1").on("click", () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contactMeSection").offset().top - 60
    }, 2000);
})

getRandomQuote();

function getRandomQuote() {
    var queryURL = "https://programming-quotes-api.herokuapp.com/quotes/random"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(response => {
        if (response.en.length > 225 ) {
            getRandomQuote();
            return;
        }
        $("#quote").html(response.en);
        $("#quote").append($("<div>").html("-" + response.author))
    })
}

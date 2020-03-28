$(".aboutMe").on("click", () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#aboutMeSection").offset().top
    }, 2000);
})

$(".portfolio").on("click", () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#portfolioSectionP1").offset().top
    }, 2000);
})

$(".contactMe").on("click", () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contactMeSection").offset().top
    }, 2000);
})

getRandomQuote();

function getRandomQuote() {
    var queryURL = "https://programming-quotes-api.herokuapp.com/quotes/random"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(response => {
        console.log(response);
        console.log(response.en.length);
        if (response.en.length > 225 ) {
            getRandomQuote();
            return;
        }
        $("#quote").html(response.en);
        $("#quote").append($("<div>").html("-" + response.author))
    })
}

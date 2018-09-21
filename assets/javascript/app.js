$(document).ready(function () {
    var animals = ["cat", "bird", "dog", "goose", "dolphin", "squirrel", "rabbit", "chicken", "goldfish", "tigger", "frog"];

    function renderButton() {

        $("#animal-view").empty();

        for (var i = 0; i < animals.length; i++) {

            var btn = $("<button>");
            btn.addClass("animal");
            btn.attr("data-name", animals[i]);
            btn.text(animals[i]);
            $("#animal-view").append(btn);

        }
    }

    $("#add-animal").click(function (event) {
        event.preventDefault();

        var animal = $("#animal-input").val().trim();
        animals.push(animal);
        renderButton();

    });
    renderButton();

    var apiKey = "Xqec8EZ0nSj3wtzf4iWBvGG4FJ2VwdiS";

    $("button").on("click", function () {
        var btn = $(this).attr("data-name");
        console.log(btn);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + btn + "&api_key=" + apiKey + "&limit=10";

        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(response);
             var result = response.data;
             
             for (var i = 0; i< result.length; i++){
                 var gifDiv = $("<div>");
                 var rating = result[i].rating;
                 var p = $("<p>").text("Rating: " + rating);
                 var image = $("<img>");
                 image.attr("src", result[i].images.fixed_height.url);
                 gifDiv.append(p);
                 gifDiv.append(image);
                 $("#images").prepend(gifDiv);
             }
             


            });


    });
});

$(function () {
    $(".devour-it").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        // var eaten = $(this).data("devouredNow");

        var newEatenState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(function () {
            console.log("Changed devoured to ", newEatenState);

            location.reload();
        });
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added burger!");

            location.reload();
        });
    });
});

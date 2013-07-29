$(function()
{
    "use strict";

    var player = new RPS.Player();
    var ai = new RPS.AI();

    var paths = {   "rock": "url('img/small-rock.png')",
                    "paper": "url('img/small-paper.png')",
                    "scissors": "url('img/small-scissors.png')"};

    var clickrock = $("#clickrock");
    var clickpaper = $("#clickpaper");
    var clickscissors = $("#clickscissors");

    var victor = $("#victor");

    player.choice_icon = $("#player > .choice");
    ai.choice_icon = $("#ai > .choice");


    clickrock.click(function() {
        player.choice_icon.css("background-image", paths.rock);
        roll("rock");
    });

    clickpaper.click(function() {
        player.choice_icon.css("background-image", paths.paper);
        roll("paper");
    });

    clickscissors.click(function() {
        player.choice_icon.css("background-image", paths.scissors);
        roll("scissors");
    });

    var roll = function (choice) {
        player.Input(choice);
        ai.Roll();

        ai.choice_icon.css("background-image", paths[ai.choice.name]);

        var winner_choice = RPS.Weigh(player.choice, ai.choice);

        if(winner_choice == player.choice)
        {
            victor.html("YOU WIN!");
            victor.removeClass("ai");
            victor.addClass("player");
        }
        else if(winner_choice == ai.choice)
        {
            victor.html("AI WINS!");
            victor.removeClass("player");
            victor.addClass("ai");
        }
        else if(winner_choice === 0)
        {
            victor.html("DRAW!");
            victor.removeClass("player");
            victor.addClass("ai");
        }
    };
});

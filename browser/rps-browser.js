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

    var playerscore = { div: $("#playerscore"), value: 0 };
    var aiscore = { div: $("#aiscore"), value: 0 };

    var icons = $("#icons");

    var change_state = function(animation) {
        this.div.removeClass(this.anim);
        this.anim = animation;
        this.div.addClass(this.anim);
    };

    var fight_area = { div: $("#fight"), anim: "bounceOutDown" };
    fight_area.change = change_state.bind(fight_area);
    var icons_area = { div: $("#icons"), anim: "bounceInDown" };
    icons_area.change = change_state.bind(icons_area);


    fight_area.div.addClass(fight_area.anim);
    icons_area.div.addClass(icons_area.anim);

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

        icons_area.change("bounceOutUp");
        fight_area.change("bounceInUp");

        setTimeout(function ()
        {
            icons_area.change("bounceInDown");
            fight_area.change("bounceOutDown");
        }, 3000);

        if(winner_choice === player.choice)
        {
            victor.html("YOU WIN!");
            victor.removeClass("ai");
            victor.addClass("player");

            playerscore.value++;
            playerscore.div.text("(" + playerscore.value + ")");
        }
        else if(winner_choice === ai.choice)
        {
            victor.html("AI WINS!");
            victor.removeClass("player");
            victor.addClass("ai");
            aiscore.value++;
            aiscore.div.text("(" + aiscore.value + ")");
        }
        else if(winner_choice === 0)
        {
            victor.html("DRAW!");
            victor.removeClass("player");
            victor.addClass("ai");
        }
    };
});

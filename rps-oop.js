if(require) {
    var utils = require('./rps-utils');
}

var RPS = (function(utils, undefined)
{
    "use strict";

    var Rock = {};
    var Paper = {};
    var Scissors = {};

    // [design]
    // Function is in a closure, hence, it is not tested!

    Rock.name = "rock";
    Rock.stronger_than = Scissors;
    Rock.weaker_than = Paper;

    Paper.name = "paper";
    Paper.stronger_than = Rock;
    Paper.weaker_than = Scissors;

    Scissors.name = "scissors";
    Scissors.stronger_than = Paper;
    Scissors.weaker_than = Rock;


    var Player = function () {
        this.choice = undefined;
    };

    Player.options = {};
    Player.options[Rock.name] = Rock;
    Player.options[Paper.name] = Paper;
    Player.options[Scissors.name] = Scissors;

    Player.prototype.choice = null;
    Player.prototype.name = "Player";

    Player.prototype.Input = function (choice) {
        choice.toLowerCase();

        if(choice in Player.options)
        {
            this.choice = Player.options[choice];
            return Player.options[choice];
        }
        else
        {
            this.choice = undefined;
            return false;
        }
    };

    var AI = function(name)
    {
        this.name = name;
        this.choice = undefined;
    };

    AI.options = {};
    AI.options[0] = Rock;
    AI.options[1] = Paper;
    AI.options[2] = Scissors;

    AI.prototype.Roll = function ()
    {
        var value = utils.randomrange(0, 2);

        this.choice = AI.options[value];
        return AI.options[value];
    };

    var Weigh = function(RPS1, RPS2)
    {
        if(RPS1 === RPS2)
            return 0;
        else if(RPS1.stronger_than === RPS2)
        {
            return RPS1;
        }
        else if(RPS1.weaker_than === RPS2)
        {
            return RPS2;
        }
    };

    return {
        Rock: Rock,
        Paper: Paper,
        Scissors: Scissors,
        Player: Player,
        AI: AI,
        Weigh: Weigh
    };
})(utils);

if(module) {
    module.exports = RPS;
}

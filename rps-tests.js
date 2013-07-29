(function(module, undefined)
{
    "use strict";

    describe("RPSRelations test", function ()
    {
        it("should have proper relations between rock paper and scissors", function()
        {
            expect(module.Rock.weaker_than).toBe(module.Paper);
            expect(module.Rock.stronger_than).toBe(module.Scissors);

            expect(module.Paper.weaker_than).toBe(module.Scissors);
            expect(module.Paper.stronger_than).toBe(module.Rock);

            expect(module.Scissors.weaker_than).toBe(module.Rock);
            expect(module.Scissors.stronger_than).toBe(module.Paper);
        });
    });

    describe("Player behavior", function ()
    {
        var igrac;

        beforeEach(function() {
            igrac = new module.Player();
        });

        it("should have a name", function()
        {
            expect(igrac.name).toBeDefined();
        });

        it("should return a proper object on user input (case insensitive)", function()
        {
            expect(igrac.Input("rock")).toBe(module.Rock);

            expect(igrac.Input("paper")).toBe(module.Paper);

            expect(igrac.Input("scissors")).toBe(module.Scissors);

            expect(igrac.Input("")).toBe(false);
        });
    });


    describe("AI behavior", function ()
    {
        var ai;

        describe("Random range - untestable", function ()
        {
        });

        beforeEach(function() {
            ai = new module.AI("name");
        });

        it("should have a name", function()
        {
            expect(ai.name).toBeDefined();
        });

        it("should return a proper value when doing a roll", function()
        {
            window.utils.randomrange = jasmine.createSpy("Rock roll.").andReturn(0);
            expect(ai.Roll()).toBe(module.Rock);

            window.utils.randomrange = jasmine.createSpy("Paper roll.").andReturn(1);
            expect(ai.Roll()).toBe(module.Paper);

            window.utils.randomrange = jasmine.createSpy("Scissors roll.").andReturn(2);
            expect(ai.Roll()).toBe(module.Scissors);
        });
    });


    describe("Weighing behavior", function ()
    {
        it("should proclaim properly for rock", function ()
        {
            expect(RPS.Weigh(RPS.Rock, RPS.Rock.stronger_than)).toBe(RPS.Rock);
            expect(RPS.Weigh(RPS.Rock, RPS.Rock.weaker_than)).toBe(RPS.Rock.weaker_than);
            expect(RPS.Weigh(RPS.Rock, RPS.Rock)).toBe(0);
        });

        it("should proclaim properly for scissors", function ()
        {
            expect(RPS.Weigh(RPS.Scissors, RPS.Scissors.stronger_than)).toBe(RPS.Scissors);
            expect(RPS.Weigh(RPS.Scissors, RPS.Scissors.weaker_than)).toBe(RPS.Scissors.weaker_than);
            expect(RPS.Weigh(RPS.Scissors, RPS.Scissors)).toBe(0);
        });

        it("should proclaim properly for paper", function ()
        {
            expect(RPS.Weigh(RPS.Paper, RPS.Paper.stronger_than)).toBe(RPS.Paper);
            expect(RPS.Weigh(RPS.Paper, RPS.Paper.weaker_than)).toBe(RPS.Paper.weaker_than);
            expect(RPS.Weigh(RPS.Scissors, RPS.Scissors)).toBe(0);
        });
    });
})(RPS);

var utils = (function(undefined)
{
    var randomrange = function (min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return {
        randomrange: randomrange
    };
})();

if(module) {
    module.exports = utils;
}

"use strict";
var directions;
(function (directions) {
    directions[directions["north"] = 0] = "north";
    directions[directions["east"] = 1] = "east";
    directions[directions["west"] = 2] = "west";
    directions[directions["south"] = 3] = "south";
})(directions || (directions = {}));
console.log(directions.east);

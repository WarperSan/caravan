COLORS = ["blank", "red", "yellow", "green", "orange", "navy", "blue", "teal", "pink", "brown", "purple"];

function getSquareColorClass(color) {
    return color + "-square";
}

function getPlayerColorClass(color) {
    return color + "-player";
}

// global variables that are overwritten in bingosync.html main
var ROOM_SETTINGS = null;
var refreshBoard = function () {};
var hideBoard = function() {};
var revealBoard = function() {};


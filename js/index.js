$(document).ready(function() {

    $("#container").load("./view/main.html");
});

//random count, for fun
let generate = 0;

//flag ai or user attack
let attack = false;

//ship maps
let userMap = [];
let aiMap = [];

//box generator count
let count = 20;

//ai box generator count
let aiCount = 20;

// document.getElementById("body").requestFullscreen();

function init() {

    // document.body.requestFullscreen();

    $("#container").load("./view/game.html", function () {

        htmlMap();

        initMap(userMap, count);

        $("#text").text("Твои кораблики");
    });
}

function random() {

    generate++;

    if (generate === 10) {
        $("#text").text("Просто нажми начать уже");
    }

    if (generate > 20 && generate < 30) {
        $("#text").text("Печенек: " + generate);
    }

    if (generate === 30) {
        $("#text").text("Плюс один квадрат");
        count++;
    }

    if (generate === 40) {
        $("#text").text("Минус пять квадратов");
        count = count - 5;
    }

    if (generate === 50) {
        $("#text").text("Там дальше еще всякие скучные вопросы");
        count = 20;
    }

    clearMapView();

    initMap(userMap, count);
}

function start() {

    $("#text").text("Стреляй по бою!");

    $("footer").hide();

    attack = true;

    initMap(aiMap, aiCount);

    clearMapView();

    // $("#container").load("./view/main.html" );
}


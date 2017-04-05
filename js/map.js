// 4
// 33
// 222
// 1111
//
// 20

let fleet = {1: 4, 2: 3, 3: 2, 4: 1};
// let fleet = [0, 4, 3, 2, 1];

// let count = 20;

function checkNeighbors(map, i, j) {

    // console.log(i + " " + j)

    //check corners
    if ((i > 0 && j > 0 && map[i-1][j-1] === "ship") ||
        (i > 0 && j < 9 && map[i-1][j+1] === "ship") ||
        (i < 9 && j > 0 && map[i+1][j-1] === "ship") ||
        (i < 9 && j < 9 && map[i+1][j+1] === "ship"))
        return false;

    return true;
}

function fillMapArray(map, count) {

    // let randConst = 100 / count;
    let randConst = 5;

    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {

            if (map[i][j] !== "ship" &&
                Math.round(Math.random() * randConst) === 1 &&
                checkNeighbors(map, i, j)) {

                map[i][j] = "ship";

                count--;

                $("#cell" + i + j).addClass("ship");

                if (count <= 0) {
                    return;
                }
            }
        }
    }

    if (count > 0)
        fillMapArray(map, count);
}

function createMapArray(map) {

    for (let i = 0; i < 10; i++) {

        map[i] = [];

        for (let j = 0; j < 10; j++) {

            map[i][j] = "";
        }
    }
}

function initMap(map, count) {

    createMapArray(map);

    fillMapArray(map, count);

    // console.log(count)
}

function clearMapView() {

    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {

            let cell = $("#cell" + i + j);

            cell.removeClass("ship");
            cell.removeClass("void");
            cell.removeClass("dead");
        }
    }
}

function showMap(map) {

    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {

            if (map[i][j] === "ship")
                $("#cell" + i + j).addClass("ship");

            if (map[i][j] === "void")
                $("#cell" + i + j).addClass("void");

            if (map[i][j] === "dead")
                $("#cell" + i + j).addClass("dead");
        }
    }
}

function showAiMap(map) {

    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {

            // if (map[i][j] === "ship")
            //     $("#cell" + i + j).addClass("ship");

            if (map[i][j] === "void")
                $("#cell" + i + j).addClass("void");

            if (map[i][j] === "dead")
                $("#cell" + i + j).addClass("dead");
        }
    }
}

function htmlMap() {

    for (let i = 0; i < 10; i++) {

        $("#field").append("<div class='rowCell' id='row" + i + "'></div>");

        for (let j = 0; j < 10; j++) {

            $("#row" + i).append("<div class='cell' id='cell" + i + j + "' onclick='shot(" + i + " ," + j + ")'></div>");
        }
    }
}

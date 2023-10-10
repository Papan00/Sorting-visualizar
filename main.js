var arr = [];
var play = false;

var delay = 40;
var iter = 0;
var multiplier = 1;

updateDelay(document.getElementById("delay-slider").value);
updateSize(document.getElementById("number-slider").value);
updateSizeValue(document.getElementById("number-slider").value);

var l, r;
async function sort() {
    togglePlay();
    if (play) {
        delay = document.getElementById("delay-slider").value * multiplier;
        var selection = document.getElementsByTagName("select")[0].selectedIndex
        switch (parseInt(selection)) {
            case 0:
                selectionSort(iter);
                break;
            case 1:
                BubbleSort(iter);
                break;
            case 2:
                iter += 1;
                insertionSort(iter);
                break;
            case 3:
                disableSort();
                mergeSort(0, arr.length - 1);
                break;
            case 4:
                disableSort();
                await quickSort(0, arr.length - 1);
                printChartOnly();
                finishSort();
                break;

            case 5:
                disableSort();
                heapSort(arr.length);
                console.log(arr);
                break;
        }
    }
}


function enableSort() {
    document.getElementById("sort-btn").innerHTML = "SORT";
    document.getElementById("sort-btn").removeAttribute("disabled");
}

function disableSort() {
    document.getElementById("sort-btn").innerHTML = "DISABLED";
    document.getElementById("sort-btn").setAttribute("disabled", null);
}

function updateDelay(val) {
    delay = val * multiplier;
    document.getElementById('delayValue').innerHTML = "Delay: " + val * multiplier + " ms";
}

function updateSize(val) {
    iter = 0;
    arr = [];
    for (var i = 0; i < val; i++) {
        arr.push(i + 1);
    }
    max = Math.max(...arr);
    arr = shuffle();
    finishSort();
}

function updateSizeValue(val) {
    document.getElementById('numberValue').innerHTML = "Size: " + val;
}

function shuffleArray() {
    finishSort();
    arr = shuffle();
    printChartOnly();
}

function shuffle() {
    var m = arr.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
    }
    return arr;
}

function togglePlay() {
    play = !play;
    document.getElementById("sort-btn").innerHTML = play ? "Pause" : "Sort";
}


function finishSort() {
    printChartOnly();
    iter = 0;
    enableSort();
    play = false;
}


function swap(i1, i2) {
    temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}
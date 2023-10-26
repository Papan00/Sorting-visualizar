

function printChartOnly() {
    document.getElementsByClassName("table")[0].innerHTML = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        print(arr[i], max);
    }
}

function printRange(l, r) {
    var i;
    for (i = 0; i < arr.length; i++) {
        document.getElementsByClassName("bar")[i].setAttribute("style", "height: " + (arr[i] / max * 100) + "%;");
        if (i >= l && i <= r) {
            document.getElementsByClassName("bar")[i].classList.add("unsorted");
        } else {
            document.getElementsByClassName("bar")[i].classList.remove("curr");
            document.getElementsByClassName("bar")[i].classList.remove("unsorted");
        }

    }
}

function printRangeCurr(l, r, curr) {
    var i;
    for (i = 0; i < arr.length; i++) {
        document.getElementsByClassName("bar")[i].setAttribute("style", "height: " + (arr[i] / max * 100) + "%;");
        if (i >= l && i <= r) {
            document.getElementsByClassName("bar")[i].classList.add("unsorted");
        } else {
            document.getElementsByClassName("bar")[i].classList.remove("curr");
            document.getElementsByClassName("bar")[i].classList.remove("unsorted");
        }
        if (i == curr) {
            document.getElementsByClassName("bar")[i].classList.remove("unsorted");
            document.getElementsByClassName("bar")[i].classList.add("curr");
        }

    }
}
function print(num, max) {
    document.body.getElementsByClassName("table")[0].innerHTML += ("<div class='chart'><div class='bar' style='height: " + (num / max) * 100 + "%;'></div></div>");
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

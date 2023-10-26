


function insertionSort(iter) {
    if (iter >= arr.length) {
        finishSort();
        return;
    }
    var key = arr[iter];
    var j = iter - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
    }
    arr[j + 1] = key;
    printRangeCurr(iter, arr.length - 1, j);
    if (play) {
        iter += 1;
        setTimeout(() => insertionSort(iter), delay);
    }
}



function BubbleSort(iter) {
    if (iter >= arr.length - 1) {
        finishSort();
        return;
    }
    var pos = 0;
    for (j = 0; j < arr.length; j++) {
        if (arr[j] < arr[j - 1]) {
            swap(j, j - 1);
            pos = j;
        }
    }
    printRangeCurr(0, pos, iter);
    if (play) {
        iter += 1;
        setTimeout(() => BubbleSort(iter), delay);
    }
}

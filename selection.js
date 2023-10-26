

function selectionSort(iter) {
    var j, pos;
    if (iter >= arr.length) {
        finishSort();
        return;
    } 
    else {
        pos = iter;
        for (j = iter + 1; j < arr.length; j++) {
            if (arr[j] < arr[pos]) {
                pos = j;
            }
        }
        printRangeCurr(iter, arr.length - 1, pos);
        swap(iter, pos);
        if (play) {
            iter += 1;
            setTimeout(() => selectionSort(iter), delay);
        }
    }
}



async function merge(l, m, r) {
    var L = [],
        R = [],
        i, j, k;
    for (i = l; i <= m; i++)
        L.push(arr[i]);
    for (i = m + 1; i <= r; i++)
        R.push(arr[i]);

    for (i = l, j = 0, k = 0; i <= r && j <= m - l && k <= r - m - 1; i++) {
        if (L[j] < R[k])
            arr[i] = L[j++];
        else
            arr[i] = R[k++];
    }
    while (j <= m - l) {
        arr[i++] = L[j++];
    }
    while (k <= r - m - 1) {
        arr[i++] = R[k++];
    }
    if (l == 0 && r == arr.length - 1) {
        finishSort();
    }
}


async function mergeSort(l, r) {

    if (l < r) {
        var m = parseInt((l + r) / 2);
        printRange(l, r);
        await sleep(delay / 3);
        await mergeSort(l, m); //call merge sort recursively
        printRange(l, m);
        await sleep(delay / 3);
        await mergeSort(m + 1, r);  //call merge sort recursively
        printRange(m + 1, r);
        await sleep(delay / 3);
        await merge(l, m, r);   // merge
        
    }
}

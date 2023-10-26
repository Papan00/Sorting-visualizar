

async function heapify(n, i) {
    var largest = i; // Initialize largest as root 
    var l = 2 * i + 1; // left = 2*i + 1 
    var r = 2 * i + 2; // right = 2*i + 2 
    if (l < n && arr[l] > arr[largest])
        largest = l;
    if (r < n && arr[r] > arr[largest])
        largest = r;
    if (largest != i) {
        swap(i, largest);
        await heapify(n, largest);
    }
}

async function heapSort(n) {
    var i;
    for (i = n / 2 - 1; i >= 0; i--)
        await heapify(n, i);
    printRangeCurr(0, i, n);
    await sleep(delay / 2);
    for (i = n - 1; i >= 0; i--) {
        swap(0, i);
        await heapify(i, 0, i);
        printRangeCurr(0, i, i);
        await sleep(delay / 2);
    }
    printChartOnly();
    finishSort();
}

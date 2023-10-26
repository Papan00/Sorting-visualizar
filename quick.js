

async function partition(l, r) {
    var p = l;
    while (l < r) {
        while (arr[l] < arr[p]) {
            l++;

        }
        while (arr[r] > arr[p]) {
            r--;

        }
        if (l < r)
            swap(l, r);

    }
    swap(p, r);

    return r;
}


async function quickSort(l, r) {
    if (l < r) {
        var p = await partition(l, r);
        // console.log(p);
        printRangeCurr(l, r, p);
        await sleep(delay);
        await quickSort(l, p - 1);
        await quickSort(p + 1, r);
    }
}

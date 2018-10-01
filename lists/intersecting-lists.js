const intersection = (list1, list2) => {
    let trimmedList1 = list1;
    let trimmedList2 = list2;
    const diff = list1.length - list2.length;
    if (diff > 0) {
        trimmedList1 = list1.slice(diff);
    } else if (diff < 0) {
        trimmedList2 = list2.slice(Math.abs(diff));
    }

    console.log(trimmedList1);
    console.log(trimmedList2);

    const n = trimmedList1.length;
    for (let i = 0; i < n; ++i) {
        if (trimmedList1[i] === trimmedList2[i]) {
            return trimmedList1[i];
        }
    }

    return -1;
}

module.exports = {
    intersection,
};

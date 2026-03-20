function mergeAndSortArrays(array1, array2) {
    let merged = array1.concat(array2);
    return merged.sort((a, b) => a - b);
}

console.log(mergeAndSortArrays([3,1,6], [4,19]));
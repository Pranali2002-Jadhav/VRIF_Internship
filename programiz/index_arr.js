function findElementIndex(arr, element) {
    for(let i=0;i<arr.length;i++)
        if(arr[i]===element)
            return i;

    return -1;

}

arr= [2,4,6,8,10];
console.log(findElementIndex(arr,6));
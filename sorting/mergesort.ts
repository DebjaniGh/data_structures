function merge(arr: number[], low: number, mid: number, high: number) {
    let temp: number[] = [];
    let left = low;
    let right = mid + 1;
    while(left <= mid && right <= high){
        if(arr[left] <= arr[right]){
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while(left <= mid){
        temp.push(arr[left]);
        left++;
    }

    while(right <= high){
        temp.push(arr[right]);
        right++;
    }

    for(let i = low; i <= high; i++){
        arr[i] = temp[i - low];
    }
}

function mergesort(arr: number[], low: number, high: number) {
    if(low >= high) {
        return;
    }

    const mid = Math.floor((low + high) / 2);
    mergesort(arr, low, mid);
    mergesort(arr, mid+1, high);
    merge(arr, low, mid, high);
}

let arr1: number[] = [38, 27, 43, 3, 9, 82, 10];
let low = 0;
let high = arr1.length - 1;
mergesort(arr1, low, high); // Output: [3, 9, 10, 27, 38, 43, 82]
console.log(arr1); // Output: [3, 9, 10, 27, 38, 43, 82]
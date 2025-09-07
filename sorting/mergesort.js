function merge(arr, low, mid, high) {
    var temp = [];
    var left = low;
    var right = mid + 1;
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        }
        else {
            temp.push(arr[right]);
            right++;
        }
    }
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }
    for (var i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}
function mergesort(arr, low, high) {
    if (low >= high) {
        return;
    }
    var mid = Math.floor((low + high) / 2);
    mergesort(arr, low, mid);
    mergesort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}
var arr1 = [38, 27, 43, 3, 9, 82, 10];
var low = 0;
var high = arr1.length - 1;
mergesort(arr1, low, high); // Output: [3, 9, 10, 27, 38, 43, 82]
console.log(arr1); // Output: [3, 9, 10, 27, 38, 43, 82]

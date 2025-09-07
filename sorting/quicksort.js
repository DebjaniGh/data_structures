"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quicksort = quicksort;
// quicksort using hoare partition scheme
function quicksort(arr, low, high) {
    if (low === void 0) { low = 0; }
    if (high === void 0) { high = arr.length - 1; }
    if (low < high) {
        var p = partition(arr, low, high);
        quicksort(arr, low, p - 1);
        quicksort(arr, p + 1, high);
    }
    return arr;
}
function partition(arr, low, high) {
    var _a, _b;
    var pivot = arr[low];
    var i = low;
    var j = high;
    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }
        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) {
            _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
        }
    }
    _b = [arr[j], arr[low]], arr[low] = _b[0], arr[j] = _b[1];
    return j;
}
// Example usage:
var array = [3, 6, 8, 10, 1, 2, 1];
console.log(quicksort(array)); // Output: [1, 1, 2, 3, 6, 8, 10]

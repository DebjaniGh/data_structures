// quicksort using hoare partition scheme
export function quicksort(arr: number[], low = 0, high = arr.length - 1): number[] {
    if (low < high) {
        const p = partition(arr, low, high);
        quicksort(arr, low, p-1);
        quicksort(arr, p + 1, high);
    }
    return arr;
}

function partition(arr: number[], low: number, high: number): number {
    const pivot = arr[low];
    let i = low;
    let j = high ;
    while (i < j) {
       while(arr[i] <= pivot && i <= high - 1) {
            i++;
        }
       while (arr[j] > pivot && j >= low + 1) {
        j--;
       }
         if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
         }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

// Example usage:
const array = [3, 6, 8, 10, 1, 2, 1];
console.log(quicksort(array)); // Output: [1, 1, 2, 3, 6, 8, 10]
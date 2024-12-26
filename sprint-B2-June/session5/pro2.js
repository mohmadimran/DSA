// Problem Description
// You are given an array arr. You need to sort the array arr using quick sort.
// Note :- You should sort the array arr using quick sort only.

// Input format
// First line will contain a single integer N.
// Second line will contain N space separated integers representing array elements.

// Output format
// Output the array space separated in a single line or simply return a sorted array.

// Sample Input 1
// 5 4 3 1 2 5

// Sample Output 1
// 1 2 3 4 5

// Explanation
// Taking an array like [5, 4, 3, 1, 2], Quick Sort begins by choosing a pivot, often the last element, and partitions the array by rearranging elements on either side of the pivot.
// Recursive calls are then applied to the subarrays. For instance, in the given array, the pivot 2 is chosen, leading to the partitioned array [1, 2, 3, 5, 4].
// Further recursive calls and pivot selections result in a sorted array [1, 2, 3, 4, 5].

// Constraints
// 1 <= N <= 100000
// 1 <= arr[i] <= 10000000
function partition(arr, low, high) {
    const pivot = arr[high];
    let j = low;
    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    [arr[j], arr[high]] = [arr[high], arr[j]];
    return j;
}
function quickSort(arr, low, high) {
    if (low >= high) return arr;
    const j = partition(arr, low, high);
    quickSort(arr, low, j - 1);
    quickSort(arr, j + 1, high);
    return arr;
}

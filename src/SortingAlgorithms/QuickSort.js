export default function getQuickSortAnimation(array) {
    const animations = [];
    // If array is of length 1 or less it is already sorted
    if (array.length <= 1) return array;
    // Sort the array using insertion-sort
    quickSort(array, 0, array.length, animations);
    return animations;    
}

function quickSort(array, start_idx, end_idx, animations) {
    // Base case: empty array or array with only 1 element
    if (end_idx - start_idx <= 1)
        return;
    // Returns the position of pivot
    let pivot = partition(array, start_idx, end_idx, animations);
    quickSort(array, start_idx, pivot, animations);
    quickSort(array, pivot + 1, end_idx, animations);
    // Elements are sorted
    for (let i = start_idx; i < pivot; i++) {
        animations.push(['sorted', i]);
    }
    for (let i = pivot; i < end_idx; i++) {
        animations.push(['sorted', i]);
    }
}

function partition(array, start_idx, end_idx, animations) {
    let pivot;
    let temp;
    let smaller_idx, larger_idx;
    smaller_idx = start_idx;
    larger_idx = end_idx - 1;
    // Pivot is initially at end_idx - 1
    pivot = array[end_idx - 1];

    // Loop till division point is found
    while (larger_idx > smaller_idx) {
        // Push comparison animations for changing colors
        animations.push(['compare', larger_idx - 1, end_idx - 1]);
        animations.push(['compare', larger_idx - 1, end_idx - 1]);
        if (array[larger_idx - 1] > pivot) {
            // Move a[larger_idx - 1] to the pivot position and move the pivot down
            animations.push(['change-height', larger_idx, array[larger_idx - 1]]);
            array[larger_idx] = array[larger_idx - 1];
            larger_idx--;
        } else {
            // Swap smaller_idx and larger_idx - 1 elements and move smaller_idx up
            temp = array[larger_idx - 1];
            array[larger_idx - 1] = array[smaller_idx];
            array[smaller_idx] = temp;
            animations.push(['change-height', larger_idx - 1, array[larger_idx - 1]]);
            animations.push(['change-height', smaller_idx, array[smaller_idx]]);
            smaller_idx++;
        }
    }
    // Put pivot value
    animations.push(['change-height', larger_idx, pivot]);
    array[larger_idx] = pivot;
    return larger_idx;
}
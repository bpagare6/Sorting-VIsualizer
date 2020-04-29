export default function getInsertionSortAnimation(array) {
    const animations = [];
    // If array is of length 1 or less it is already sorted
    if (array.length <= 1) return array;
    // Sort the array using insertion-sort
    insertionSort(array, 0, array.length-1, animations);
    return animations;    
}

function insertionSort(array, start_idx, end_idx, animations) {
    for (let i = start_idx; i <= end_idx; i++) {
        for (let j = i; j >= start_idx + 1; --j) {
            // Animation showing comparison of two elements to show color
            animations.push(['compare', j, j-1]);
            // Animation showing comparison of two elements to change color back
            animations.push(['compare', j, j-1]);
            let a = array[j];
            let b = array[j-1];
            // If element a is smaller then swap with b
            if (a < b) {
                swap(array, j, j-1, animations);
            } else {
                break;
            }
        }
    }
}

function swap(array, idx_1, idx_2, animations) {
    // Swapping two elements with given indexes
    let temp = array[idx_2];
    array[idx_2] = array[idx_1];
    array[idx_1] = temp;
    // Adding swap animation for changing height
    animations.push(['change-height', idx_1, array[idx_1]]);
    animations.push(['change-height', idx_2, array[idx_2]]);
}
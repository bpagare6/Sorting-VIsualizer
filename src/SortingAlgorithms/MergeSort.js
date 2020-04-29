export default function getMergeSortAnimation(array) {
    const animations = [];
    // If array is of length 1 or less it is already sorted
    if (array.length <= 1) return array;
    // Sort the array using merge-sort
    mergeSort(array, 0, array.length-1, animations);
    return animations;    
}

function mergeSort(array, start_idx, end_idx, animations) {
    // If start index and end index matches,
    // Then array is of only length 1 so it is sorted
    if (start_idx === end_idx) return;
    // Calculate the middle index as breaking point
    const middle_idx = Math.floor((start_idx + end_idx) / 2);
    // Sort from start to middle
    mergeSort(array, start_idx, middle_idx, animations);
    // Sort from middle to end
    mergeSort(array, middle_idx + 1, end_idx, animations);
    // Merge the result
    merge(array, start_idx, middle_idx, end_idx, animations);
}

function merge(array, start_idx, middle_idx, end_idx, animations) {
    let i = start_idx;
    let j = middle_idx + 1;
    // If the direct merge is already sorted
    if (array[middle_idx] <= array[j]) { 
        return;
    } 
    // Two pointers to maintain start of both arrays to merge 
    while (i <= middle_idx && j <= end_idx) { 
        // Push the comparison animations to show color change
        animations.push(['compare', i, j]);
        // Push the comparison animations to change color back
        animations.push(['compare', i, j]);
        // If element 1 is in right place
        if (array[i] <= array[j]) { 
            i++;
        } else { 
            let value = array[j]; 
            let index = j;
            // Shift all the elements between element 1 element 2, right by 1. 
            while (index !== i) {
                // Show the shift animation
                animations.push(['change-height', index, array[index-1]]);
                array[index] = array[index - 1]; 
                index--; 
            }
            // Show the shift animation
            animations.push(['change-height', i, value]);
            array[i] = value; 
            // Update all the pointers 
            i++; middle_idx++; j++;
        } 
    } 
}
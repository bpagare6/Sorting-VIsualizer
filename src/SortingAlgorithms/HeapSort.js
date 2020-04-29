export default function getHeapSortAnimation(array) {
    const animations = [];
    // If array is of length 1 or less it is already sorted
    if (array.length <= 1) return array;
    // Sort the array using insertion-sort
    heapSort(array, array.length, animations);
    return animations;    
}

function heapSort(array, number_elements, animations) {
    // Build heap (rearrange array) 
    for (let i = number_elements / 2 - 1; i >= 0; i--) 
        heapify(array, number_elements, i, animations);
    // One by one extract an element from heap 
    for (let i = number_elements - 1; i > 0; i--) { 
        // Move current root to end 
        swap(array, 0, i, animations);
        // Sorted element
        animations.push(['sorted', i]);
        // call max heapify on the reduced heap 
        heapify(array, i, 0, animations);
    }
    animations.push(['sorted', 0]);
}

function heapify(array, number_elements, i, animations) { 
    let largest = i; // Initialize largest as root 
    let l = 2*i + 1; // left = 2*i + 1 
    let r = 2*i + 2; // right = 2*i + 2 
    // If left child is larger than root
    if (l < number_elements && array[l] > array[largest]) {
        animations.push(['compare', l, largest]);
        animations.push(['compare', l, largest]);
        largest = l;
    }
    // If right child is larger than largest so far 
    if (r < number_elements && array[r] > array[largest]) { 
        animations.push(['compare', r, largest]);
        animations.push(['compare', r, largest]);
        largest = r;
    }
    // If largest is not root 
    if (largest !== i) {
        swap(array, i, largest, animations); 
        // Recursively heapify the affected sub-tree 
        heapify(array, number_elements, largest, animations); 
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
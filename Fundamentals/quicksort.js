const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// https://www.guru99.com/quicksort-in-javascript.html

function partition(nums, left, right) {
    let pivot = nums[Math.floor(nums.length / 2)]; //middle element
    i = left; //left pointer
    j = right; //right pointer
    
    while (i <= j) {
        while (nums[i] < pivot) {
            i++;
        }
        while (nums[j] > pivot) {
            j--;
        }
        if (i <= j) {
            // swap i & j
            let temp = nums[i];
            nums[j] = nums[i];
            nums[i] = temp;
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(nums, left, right) {
    if (nums.length > 1) {
        let index = partition(nums, left, right); //index returned from partition
        
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(nums, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(nums, index, right);
        }
    }
    return nums;
}

console.log(quickSort(nums1, 0, nums1.length-1));
// quicksort(nums2);
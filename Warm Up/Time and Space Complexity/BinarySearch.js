// Binary search
// Input: nums = [1,3,5,6], target = 5
let num = [1, 3, 5, 6];
function binarySearch(num, target) { 
    let left = 0;
    let right = num.length - 1;

    while (left <= right) { 
        let mid = Math.floor((left + right) / 2);
        if (num[mid] == target) {
            return mid;
        } else if (num[mid] < target) {
            left = mid + 1;
        } else { 
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch(num, 5));
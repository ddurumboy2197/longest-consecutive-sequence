function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    nums = [...new Set(nums)].sort((a, b) => a - b);

    let longest = 1;
    let current = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            current++;
        } else {
            longest = Math.max(longest, current);
            current = 1;
        }
    }

    return Math.max(longest, current);
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9
console.log(longestConsecutive([])); // 0
console.log(longestConsecutive([1])); // 1
console.log(longestConsecutive([1, 2, 3, 4, 5])); // 5
console.log(longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 9
console.log(longestConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 10

let nextPermutation = (nums) => {
  if (!nums || nums.length <= 1) return;
  // find first index i such that nums[i + 1] is greater than nums[i]
  let i = nums.length - 2;
  while (nums[i] >= nums[i + 1]) i--;
  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) j--;
    swap(i, j);
  }
  reverse(nums, i + 1, nums.length - 1);
}

let swap = (nums, i, j) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

let reverse = (nums, i, j) => {
  while (i < j) swap(i++, j--);
}
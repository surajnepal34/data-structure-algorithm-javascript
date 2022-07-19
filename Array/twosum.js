const nums = [2, 7, 11, 15];
const target = 9;

const getTwoSumIndex = (nums, target) => {
  let complementMap = new Map();
  let index = 0;
  while (index <= nums.length - 1) {
    let hasComplementIndex = complementMap.has(nums[index]);
    if (hasComplementIndex) {
      let complementIndex = complementMap.get(nums[index]);
      return [complementIndex, index];
    } else {
      let complement = target - nums[index];
      complementMap.set(complement, index);
    }
    index++;
  }
  return [];
};

const twoSumResult = getTwoSumIndex(nums, target);
console.log("Output array : ", twoSumResult);

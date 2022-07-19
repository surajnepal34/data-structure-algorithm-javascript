const nums = [0, 1, 0, 3, 0, 12];
//const nums = [1]

const moveZero = (nums) => {
  let tempZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      tempZeroIndex++;
    } else if (tempZeroIndex > 0) {
      nums[i - tempZeroIndex] = nums[i];
      nums[i] = 0;
    }
  }
  console.log("The output is", nums);
};

moveZero(nums);

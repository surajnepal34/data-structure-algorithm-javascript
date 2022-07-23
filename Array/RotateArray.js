//Input: nums = [1,2,3,4,5,6,7], k = 3
//Output: [5,6,7,1,2,3,4]

const nums = [1,2]
//const nums = []
const k = 3

const rotateArray = (nums, k) => {

    if(nums.length > 1){
        if(k > nums.length){
            k = k % nums.length;
        }
        
    let start = 0;
    let end = nums.length-1;
    while(start < end){
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    start = 0;
    end = k-1;
    while(start < end){
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    start= k;
    end = nums.length -1;
    while(start < end){
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    } 
    console.log("The rotated array  :",nums);
}
}

rotateArray(nums, k);
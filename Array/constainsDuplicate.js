const nums = [1,2,3,1]

const containsDuplicate = (nums)=>{
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if(hashMap[nums[i]] === true){
            return true;
        } else{
            hashMap[nums[i]] = true;
        }
    }
    return false;
}

console.log(containsDuplicate(nums));
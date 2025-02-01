var removeDuplicates = function(nums) {
    let k = 0;
    let ele = nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]>ele){
            nums[++k] = nums[i];
        }
    }
};
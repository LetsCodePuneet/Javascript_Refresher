const reverse = (nums,indexStart, indexEnd)=>{
    // if(indexStart>=0 && indexEnd<=nums.length-1)
        while(indexStart<= indexEnd){
            let temp = nums[indexStart];
            nums[indexStart] = nums[indexEnd];
            nums[indexEnd] = temp;
            indexStart++;
            indexEnd--;
        }

}

var rotate = function(nums, k) {
    //costed TLE
    // while(k>0){
    //     let ele = nums[nums.length-1];
    //     for(let i=nums.length-1;i>0;i--){
    //         if(i-1>=0){
    //             nums[i] = nums[i-1];
    //         } 
    //     }
    //     nums[0] = ele;
    //     k--;
    // }
    
    // Below calls failed when k is greater is tha nums.length
    //  reverse(nums, 0, nums.length -1);
    //     reverse(nums, 0, k -1);
    //     reverse(nums, k, nums.length-1);
        k = k % nums.length;
        reverse(nums, 0, nums.length -1);
        reverse(nums, 0, k -1);
        reverse(nums, k, nums.length-1);
};
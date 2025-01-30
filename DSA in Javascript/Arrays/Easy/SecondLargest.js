function getSecondLargest(arr) {
    // Code Here
    let max = Number.MIN_SAFE_INTEGER;
    let sec_max = max;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            sec_max = max;
            max = arr[i];
        }else if(arr[i]>sec_max && arr[i]<max) {
            sec_max = arr[i];
        }
    }
    return (sec_max === Number.MIN_SAFE_INTEGER)?-1:sec_max;
}
function largest(arr) {
    // code here
    let max = Number.MIN_SAFE_INTEGER
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
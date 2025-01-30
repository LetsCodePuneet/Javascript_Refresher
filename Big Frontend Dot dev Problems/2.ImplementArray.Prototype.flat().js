

// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    // your imeplementation here
    if(depth == 0)
      return arr;
  
    let result = [];
    for(let element of arr){
      if(Array.isArray(element)){
        let flatenned = flat(element,depth - 1);
        result = result.concat(flatenned);
      }else{
        result.push(element);
      }
    }
    return result;
  }
  
  
  
  const arr = [1, [2], [3, [4,5,6]]];
  // flat(arr)
  // [1, 2, 3, [4]]
  // flat(arr, 1)
  // [1, 2, 3, [4]]
  console.log(flat(arr, 0))
  // [1, 2, 3, 4]
  
  
  
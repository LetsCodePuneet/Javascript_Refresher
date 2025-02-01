// This is a JavaScript coding problem from BFE.dev
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
  // your imeplementation here
  if (depth == 0) return arr;

  let result = [];
  // for(let element of arr){
  //   if(Array.isArray(element)){
  //     let flatenned = flat(element,depth - 1);
  //     result = result.concat(flatenned);
  //   }else{
  //     result.push(element);
  //   }
  // }

  // for in loop helps in not skipping the undefined or empty values. Hence to consider the sparse array added the below logic
  for (let index in arr) {
    let element = arr[index];
    if (Array.isArray(element)) {
      let flattened = flat(element, depth - 1);
      result = result.concat(flattened);
    } else {
      result.push(element);
    }
  }
  return result;
}

const arr = [1, [2], [3, [4]]];
flat(arr)
// [1, 2, 3, [4]]
flat(arr, 1)
// [1, 2, 3, [4]]
flat(arr, 2)
// [1, 2, 3, 4]
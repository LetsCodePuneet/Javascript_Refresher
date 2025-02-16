const findCorrespondingNode = (rootA, rootB, target) => {
    if (rootA === target) {
         return rootB;
     }
 
     // Recursive case: traverse the children of the current node
     let result = null;
     Array.from(rootA.children).forEach((child, index) => {
         if (!result) {
             result = findCorrespondingNode(child, rootB.children[index], target);
         }
     });
 
     return result;
 }
 
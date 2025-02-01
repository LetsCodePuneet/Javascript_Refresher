function sum(num,currentsum =0) {
    // your code here
    // let my_sum = num;
    // return function(num2){
    //   my_sum = my_sum + num2;
    //   return function(num3=0){
    //     return my_sum + num3;
    //   }
    // }
  
    const newCurrentSum = num + currentsum;
  
    const func = function(arg){
      return sum(arg, num + currentsum);
    }
  
    func.valueOf = () => newCurrentSum;
    return func;
  }
  const sum1 = sum(1)
  sum1(2) == 3 // true
  sum1(3) == 4 // true
  console.log(sum1(3) == 4 )
  sum(1)(2)(3) == 6 // true
  sum(5)(-1)(2) == 6 // true
  console.log(sum(5)(-1)(2) == 6);
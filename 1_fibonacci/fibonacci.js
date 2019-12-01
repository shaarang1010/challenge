// TODO: implement this function

/*Couple of ways to implement this. 
Option 1 - Using Iteration. Complexity - O(n)
Option 2 - Binets formula for nth Fibonacci number (ref- http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/fibFormula.html). Complexity = O(1)
*/

const {performance} = require('perf_hooks');


function fibonacci(n) {
  //throw new Error("Not implemented");
  
  // for default implementation, I have gone with option 2 as it has less time complexity.
  return option2(n);

  //for option1, uncomment this part
  //return option1(n);
}

const option1 = (n) =>{
  let [a,b,index] = [0,1,1] //initialize values for start, end and index

  if(isNaN(n)) 
    throw new Error('Not a number');

  //if the n is less than equal to 1, return n
  
  if(n <= 1 ){
    return n;
  }
  temp = 0;
    while(index < n){
      temp = a + b;
      a = b;
      b = temp;
      index++; 
    }
    return temp;
}


const option2 = (n) =>{
  /* using Binets formula for nth Fibonacci number in series 
   
   Fib(n) =  ([(1+sqrRoot(5))/2 - (1-sqrRoot(5))/2] / sqrRoot(5))
   */
  
  let sqrtOf5 = Math.sqrt(5);

  let positivePhi = (1+sqrtOf5)/2;
  let negativePhi = (1-sqrtOf5)/2

  return Math.round((Math.pow(positivePhi, n) - Math.pow(negativePhi, n)) / sqrtOf5);

}


function main(){
  startTime = performance.now();
  for (let i = 0; i < 10; i++) {
    console.log(i, fibonacci(i));
  }
  endTime = performance.now();
  console.log('Total Runtime for Option 2 = '+`${endTime - startTime}`+' ms');
}

main();


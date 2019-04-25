//Create a function that will get the sum of the numbers between 1 and n and return the answer 
summation(5) // should return 15 because 1+2+3+4+5=15*//
const summation = function (num) {
    let sum = 0;
    for( let i =1; i<=num ; i++) {
        sum += i; }
    return sum;
    }

//Create a program to get the sum of all the even numbers in a group 
summationEven(5) // should return 6 because 2+4=6//
const summationEven = function (num) {
    let sum = 0;
       for(let i =1; i<= num; i++){
           if(i%2 == 0) 
           sum += i; }
       return sum;
      }

   //Create a function to get the average of a group of numbers 
avg([8, 2, 2, 4]) // should return 4//
const avg = function (nums){
    let sum = 0;
      for(let i=0; i < nums.length; i++) {
            sum += nums[i]; }
      let avg = sum / nums.length;
      return avg;
     }



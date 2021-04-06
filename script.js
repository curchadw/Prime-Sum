

//first we have to check if number provided is prime
const isPrime = num =>{
  //a prime number has to be greater than 1 so we start at 2 when iterating
  for (let k = 2; k < num ; k++){
   //if the number is even, its automatically false
   if (num % k === 0){
    return false;
   }
  }
  //returns if the number provided is prime or not
  return num > 1;
}

//Next we are going to add up those results


const primeSum = (n) => {
  let result = 0
  //just in the previous function a prime number has to be greater than 1 so we start iteration at 2
  for (let i = 2; i < n; i++){
    //checking is the number provided is prime
    //then we are adding  up those results
    if(isPrime(i)){
        result += i
    }
  }

  return result
}
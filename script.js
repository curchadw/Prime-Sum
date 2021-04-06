


const isPrime = num =>{
  for (let k = 2; k < num ; k++){
   if (num % k === 0){
    return false;
   }
  }
  return true;
}




const primeSum = (n) => {
  let result = 0
  for (let i = 2; i < n; i++){
    if(isPrime(i)){
        result += i
    }
  }

  return result
}